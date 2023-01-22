/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'; ///
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { PostModule } from './post/post.module';
import { GroupsModule } from './groups/groups.module';

const ormOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'Fahad123321',
  database: 'facegroup',
  entities: [__dirname + '/**/*.entity.ts', __dirname + '/**/*.entity.js'],
  port: 3306,
};
@Module({
  imports: [
    TypeOrmModule.forRoot(ormOptions),
    UsersModule,
    AuthModule,
    HomeModule,
    PostModule,
    GroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
