/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'; ///
import { AuthModule } from './auth/auth.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { HomeModule } from './home/home.module';

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
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: AuthInterceptor,
    },
  ],
})
export class AppModule {}
