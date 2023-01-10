import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { HomeService } from './home.service';
import { CreateHomeDto } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createHomeDto: CreateHomeDto) {
    return this.homeService.create(createHomeDto);
  }

  @Get()
  findAll() {
    return this.homeService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<Response> {
    const book = await this.homeService.findOne(+id);
    if (book) return res.status(HttpStatus.OK).json(book);
    return res
      .status(HttpStatus.NOT_FOUND)
      .json({ error: 'This resource  no longer exist or has been removed' });
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateHomeDto: UpdateHomeDto,
    @Res() res: Response,
  ) {
    const response = await this.homeService.update(+id, updateHomeDto);
    if (response)
      return res
        .status(HttpStatus.OK)
        .json({ message: 'Book information updated successfully' });
    return res
      .status(HttpStatus.NOT_FOUND)
      .json({ error: 'The resource to be updated no longer exist' });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    await this.homeService.remove(+id);
    res
      .status(HttpStatus.OK)
      .json({ message: 'Book details deleted successfully' });
  }
}
