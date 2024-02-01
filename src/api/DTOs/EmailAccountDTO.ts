import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  IsEmail,
} from "class-validator";

export class EmailAccountDTO {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsString()
  host: string;

  @IsNotEmpty()
  @IsNumber()
  port: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  constructor(
    userId: number,
    host: string,
    port: number,
    email: string,
    password: string,
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
