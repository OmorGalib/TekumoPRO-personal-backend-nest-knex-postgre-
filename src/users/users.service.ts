import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(@Inject('KnexConnection') private knex) {}

  async findAll() {
    return await this.knex('users').select('*');
  }

  async create(user) {
    return await this.knex('users').insert(user);
  }
}
