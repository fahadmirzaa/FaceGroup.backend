import { Injectable, Body } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from '../users/dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne({ email: email });
    if (user && bcrypt.compare(user.password, await bcrypt.hash(pass, 10))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: LoginDto) {
    const loggedInUser = await this.usersService.signIn(user);
    delete loggedInUser.password;
    console.log(loggedInUser);
    return {
      access_token: this.jwtService.sign({ ...loggedInUser }),
      loggedInUser,
    };
  }

  async register(c: CreateUserDto) {
    console.log(c);
    c.password = await bcrypt.hash(c.password, 10);
    const response = await this.usersService.create(c);
    if (response) {
      const { password, ...result } = response;
      return result;
    }
  }

  decodeToken(token): any {
    return this.jwtService.decode(token);
  }
}
