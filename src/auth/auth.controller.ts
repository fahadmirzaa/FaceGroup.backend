import { Controller, Request, Post, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from 'src/users/dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() c: LoginDto) {
    return this.authService.login(c);
  }

  @Post('register')
  async register(@Request() req, @Body() c: CreateUserDto) {
    return this.authService.register(c);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
