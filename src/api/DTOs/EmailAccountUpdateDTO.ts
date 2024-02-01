import { IsOptional, IsString, IsNumber, IsEmail } from "class-validator";
import { EmailAccountDTO } from "./EmailAccountDTO";

export class EmailAccountUpdateDTO implements Partial<EmailAccountDTO> {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsNumber()
  userId?: number;

  @IsOptional()
  @IsString()
  host?: string;

  @IsOptional()
  @IsNumber()
  port?: number;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  constructor(
    userId?: number,
    host?: string,
    port?: number,
    email?: string,
    password?: string,
    id?: number
  ) {
    if (id) this.id = id;
    this.userId = userId;
    this.host = host;
    this.port = port;
    this.email = email;
    this.password = password;
  }
}
