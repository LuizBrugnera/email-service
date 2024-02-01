import User from "../models/User";

export default class UserSqlRepository {
  public async findById(id: number): Promise<User | null> {
    return User.findByPk(id);
  }

  public async findAll(): Promise<User[]> {
    return User.findAll();
  }

  public async update(
    id: number,
    data: Partial<User>
  ): Promise<[affectedCount: number]> {
    const test = User.update(data, { where: { id } });
    return test;
  }

  public async delete(id: number): Promise<number> {
    return User.destroy({ where: { id } });
  }

  public async create(data: Partial<User>): Promise<User> {
    return User.create(data);
  }
}
