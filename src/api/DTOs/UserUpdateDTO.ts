import { IsOptional, IsString, IsNumber, IsEnum } from "class-validator";
import { UserDTO } from "./UserDTO";

enum Roles {
  ADMIN = "ADMIN",
  USER = "USER",
}

export class UserUpdateDTO implements Partial<UserDTO> {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsEnum(Roles)
  role?: Roles;

  constructor(username?: string, password?: string, role?: Roles, id?: number) {
    if (id) this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
  }
}
