import { Injectable } from '@nestjs/common';
import { CreateHomeDto } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class HomeService {
  create(createHomeDto: CreateHomeDto, currentUser: User) {
    return currentUser;
  }

  findAll() {
    return `This action returns all home`;
  }

  findOne(id: number) {
    return `This action returns a #${id} home`;
  }

  update(id: number, updateHomeDto: UpdateHomeDto) {
    return `This action updates a #${id} home`;
  }

  remove(id: number) {
    return `This action removes a #${id} home`;
  }
}
