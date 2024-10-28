import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { KnexModule } from '../knex/knex.module';

@Module({
  imports: [KnexModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
