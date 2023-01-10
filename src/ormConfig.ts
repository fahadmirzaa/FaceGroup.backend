/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Fahad123321',
  database: 'facegroup',
  synchronize: true,
  logging: false,
  migrations: ['migrations/*.ts'],
  entities: [__dirname + '/**/*.entity.ts', __dirname + '/**/*.entity.js'],
});
// npx typeorm-ts-node-esm migration:generate ./migrations/newDatabase -d ./src/ormConfig.ts
// npx typeorm-ts-node-esm migration:show -d ./src/ormConfig.ts
// npx typeorm-ts-node-esm migration:run -d ./src/ormConfig.ts
// npx typeorm-ts-node-esm migration:create ./src/migrations/newDatabase
