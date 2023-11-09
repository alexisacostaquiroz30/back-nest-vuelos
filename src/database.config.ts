import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345678',
  database: 'reserva',
  entities: ['src/models{.ts,.js}'], 
  autoLoadEntities:true,
  synchronize: true, 
  retryDelay:3000
};

export default databaseConfig;