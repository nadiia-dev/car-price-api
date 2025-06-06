import { DataSource } from 'typeorm';

const dbOptions: any = {
  synchronize: false,
  migrations: ['src/migrations/*.ts'],
};

console.log(process.env.NODE_ENV);

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(dbOptions, {
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['src/**/*.entity.ts'],
    });
    break;
  case 'test':
    Object.assign(dbOptions, {
      type: 'sqlite',
      database: 'test.sqlite',
      entities: ['src/**/*.entity.ts'],
    });
    break;
  case 'production':
    Object.assign(dbOptions, {
      type: 'postgres',
      url: process.env.DATABASE_URL,
      migrationsRun: true,
      entities: ['src/**/*.entity.js'],
      ssl: {
        rejectUnauthorized: false,
      },
    });
    break;
  default:
    throw new Error('Unknown environment');
}

export const AppDataSource = new DataSource(dbOptions);
