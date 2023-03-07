import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {PeopleController} from "./people.controller";
import {PeopleService} from "./people.service";

import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from './entities/people.entity';

@Module({
    imports: [TypeOrmModule.forFeature([People])],
    controllers: [PeopleController],
    providers: [PeopleService],
})
export class PeopleModule {}
