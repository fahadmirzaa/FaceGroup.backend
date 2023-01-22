import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  post: string;
  @IsNotEmpty()
  userId: number;
}
