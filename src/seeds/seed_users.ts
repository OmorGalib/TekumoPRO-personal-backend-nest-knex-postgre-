export async function seed(knex) {
    await knex('users').del();
    await knex('users').insert([
      { username: 'og', password: '123456' },
      { username: 'ogg', password: '1234' },
    ]);
  }
  