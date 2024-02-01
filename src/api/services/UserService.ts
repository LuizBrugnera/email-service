import UserSqlRepository from "../../database/mysql/repository/UserSqlRepository";
import { UserDTO } from "../DTOs/UserDTO";
import { UserUpdateDTO } from "../DTOs/UserUpdateDTO";
import { checkResourceExistence } from "../util/global";

enum Roles {
  ADMIN = "ADMIN",
  USER = "USER",
}

export default class UserService {
  private readonly userRepository: UserSqlRepository;

  constructor() {
    this.userRepository = new UserSqlRepository();
  }

  public async create(userDTO: UserDTO) {
    await checkResourceExistence({
      repository: this.userRepository,
      method: "findByUsername",
      identifier: userDTO.username,
      exists: false,
      errorMessage: "Username already exists.",
    });

    const user: UserDTO = {
      username: userDTO.username,
      password: userDTO.password,
      role: Roles.USER,
    };

    return await this.userRepository.create(user);
  }

  public async findById(id: number) {
    const result = await checkResourceExistence({
      repository: this.userRepository,
      method: "findById",
      identifier: id,
      exists: true,
      errorMessage: "User ID does not exist.",
    });
    return result;
  }

  public async findAll() {
    return await this.userRepository.findAll();
  }

  public async update(id: number, userDTO: UserUpdateDTO) {
    const { username, password, role } = userDTO;

    const oldUser = await this.findById(id);

    const newUser = {
      id: id,
      username: username || oldUser.username,
      password: password || oldUser.password,
      role: Roles.USER,
    };

    return await this.userRepository.update(id, newUser);
  }

  public async delete(id: number) {
    await this.findById(id);

    return await this.userRepository.delete(id);
  }
}
