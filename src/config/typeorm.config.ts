import { ConnectionOptions } from 'typeorm'

export const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  database: 'rest-api-type',
  entities: [__dirname + '/../app/entities/**/*.{ts,js}'],
  migrations: [__dirname + '/../database/migrations/*.{ts,js}']
}
