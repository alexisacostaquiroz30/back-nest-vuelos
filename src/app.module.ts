import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './database.config';

import { AereopuertoModule } from './modules/aereopuerto/aereopuerto.module';
import { AereolineaModule } from './modules/aereolinea/aereolinea.module';
import { AvionModule } from './modules/avion/avion.module';
import { ReservaModule } from './modules/reserva/reserva.module';
import { VueloModule } from './modules/vuelo/vuelo.module';
import { UsuarioModule } from './modules/usuario/usuario.module';

@Module({
  imports: [
    AereopuertoModule,
    AereolineaModule,
    AvionModule,
    ReservaModule,
    VueloModule,
    UsuarioModule,
    TypeOrmModule.forRoot(databaseConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
