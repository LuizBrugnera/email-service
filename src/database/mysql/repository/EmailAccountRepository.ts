import EmailAccount from "../models/EmailAccount";

export default class EmailAccountSqlRepository {
  public async findById(id: number): Promise<EmailAccount | null> {
    return EmailAccount.findByPk(id);
  }

  public async findAll(): Promise<EmailAccount[]> {
    return EmailAccount.findAll();
  }

  public async findByEmail(email: string): Promise<EmailAccount | null> {
    return EmailAccount.findOne({ where: { email } });
  }

  public async update(
    id: number,
    data: Partial<EmailAccount>
  ): Promise<[affectedCount: number]> {
    const test = EmailAccount.update(data, { where: { id } });
    return test;
  }

  public async delete(id: number): Promise<number> {
    return EmailAccount.destroy({ where: { id } });
  }

  public async create(data: Partial<EmailAccount>): Promise<EmailAccount> {
    return EmailAccount.create(data);
  }
}
