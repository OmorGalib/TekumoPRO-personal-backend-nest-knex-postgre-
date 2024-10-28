import { Module } from '@nestjs/common';
import knex from 'knex';
import knexConfig from '../../knexfile';

@Module({
  providers: [
    {
      provide: 'KnexConnection',
      useFactory: async () => {
        const config = knexConfig.development;
        return knex(config);
      },
    },
  ],
  exports: ['KnexConnection'],
})
export class KnexModule {}
