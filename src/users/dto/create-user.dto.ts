import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  @IsEmail({ unique: true })
  email: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  Image: string;
}
