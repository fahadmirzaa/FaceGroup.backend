import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = new User();
    user.Image = createUserDto.Image;
    user.username = createUserDto.username;
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.createdAt = new Date();
    return await this.userRepository.save(user);
  }

  async signIn(user: LoginDto) {
    const activeUser = await this.userRepository.findOneOrFail({
      where: { email: user.email },
      relations: ['post'],
    });
    if (!activeUser) {
      throw new Error('User not found');
    }
    const areEqual = await bcrypt.compare(user.password, activeUser.password);
    if (!areEqual) {
      throw new Error('Invalid credentials');
    }
    return activeUser;
  }

  findAll() {
    return this.userRepository.find({ relations: ['post'] });
  }
  async getUser() {
    return await this.userRepository.find();
  }
  async findOne(data: number | any): Promise<User | undefined> {
    return await this.userRepository.findOne(data);
  }
}
