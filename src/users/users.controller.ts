import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('/sign-in')
  signIn(@Body() user: LoginDto) {
    const useer = this.usersService.signIn(user);
    return useer;
  }

  @Get('')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/userDetails')
  async getUsers() {
    const users = await this.usersService.getUser();
    return users;
  }
}
