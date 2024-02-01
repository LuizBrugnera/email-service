import EmailAccountSqlRepository from "../../database/mysql/repository/EmailAccountSqlRepository";
import { EmailAccountDTO } from "../DTOs/EmailAccountDTO";
import { EmailAccountUpdateDTO } from "../DTOs/EmailAccountUpdateDTO";
import { checkResourceExistence } from "../util/global";
import UserService from "./UserService";

export default class EmailAccountService {
  private readonly emailAccountSqlRepository: EmailAccountSqlRepository;
  private readonly userService: UserService;

  constructor() {
    this.emailAccountSqlRepository = new EmailAccountSqlRepository();
    this.userService = new UserService();
  }

  public async create(emailAccountDTO: EmailAccountDTO) {
    await checkResourceExistence({
      repository: this.userService,
      method: "findById",
      identifier: emailAccountDTO.userId,
      exists: true,
      errorMessage: "User ID does not exist.",
    });

    await checkResourceExistence({
      repository: this.emailAccountSqlRepository,
      method: "findByEmail",
      identifier: emailAccountDTO.email,
      exists: false,
      errorMessage: "Email already exists.",
    });

    return await this.emailAccountSqlRepository.create(emailAccountDTO);
  }

  public async findById(id: number) {
    const result = await checkResourceExistence({
      repository: this.emailAccountSqlRepository,
      method: "findById",
      identifier: id,
      exists: true,
      errorMessage: "Email account ID does not exist.",
    });

    return result;
  }

  public async findAll() {
    return await this.emailAccountSqlRepository.findAll();
  }

  public async update(id: number, emailAccountDTO: EmailAccountUpdateDTO) {
    const { email, host, password, port, userId } = emailAccountDTO;

    const oldEmailAccount = await this.findById(id);

    const newEmailAccount = {
      id: id,
      email: email || oldEmailAccount.email,
      host: host || oldEmailAccount.host,
      password: password || oldEmailAccount.password,
      port: port || oldEmailAccount.port,
      userId: userId || oldEmailAccount.userId,
    };

    return await this.emailAccountSqlRepository.update(id, newEmailAccount);
  }

  public async delete(id: number) {
    await this.findById(id);

    return await this.emailAccountSqlRepository.delete(id);
  }
}
