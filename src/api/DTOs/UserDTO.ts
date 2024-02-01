import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  IsEnum,
} from "class-validator";

enum Roles {
  ADMIN = "ADMIN",
  USER = "USER",
}

export class UserDTO {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsEnum(Roles)
  role: Roles;

  constructor(username: string, password: string, role: Roles, id?: number) {
    if (id) this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
  }
}
