import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from 'ormconfig'
import {PeopleModule} from "./people/people.module";


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(AppDataSource.options),
    PeopleModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
