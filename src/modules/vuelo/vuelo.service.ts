import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


import { Avion, Vuelo } from 'src/models/entities/';
import { CreateVueloDto } from './dto';

@Injectable()
export class VueloService {

    constructor( 
        @InjectRepository(Vuelo) private readonly VueloRepository: Repository<Vuelo>,
        @InjectRepository(Avion) private readonly AvionRepository: Repository<Avion>
        ){

    }

    async findAll(): Promise<Vuelo[]>{
        return this.VueloRepository
        .createQueryBuilder('vuelo')
        .leftJoinAndSelect('vuelo.idAvion', 'avion')
        .leftJoinAndSelect('vuelo.idOrigen', 'id_origen')
        .leftJoinAndSelect('vuelo.idDestino', 'id_destino')
        .leftJoinAndSelect('avion.idAereolinea2', 'id_aereolinea')
        .select(['vuelo', 'avion', 'id_origen','id_destino','id_aereolinea' ]) // Incluye los campos que desees
        .getMany();
    }

    async findOne(idVuelo: number): Promise<Vuelo[]>{
        return this.VueloRepository
        .createQueryBuilder('vuelo')
        .leftJoinAndSelect('vuelo.idAvion', 'avion')
        .leftJoinAndSelect('vuelo.idOrigen', 'id_origen')
        .leftJoinAndSelect('vuelo.idDestino', 'id_destino')
        .leftJoinAndSelect('vuelo.reservas', 'Reserva')
        .leftJoinAndSelect('avion.idAereolinea2', 'id_aereolinea')
        .select(['vuelo', 'avion', 'id_origen','id_destino','id_aereolinea','Reserva' ]) 
        .where('vuelo.idVuelo = :idVuelo',{idVuelo})
        .getMany();
    }
    
    async nuevoVuelo({numeroVuelo,idAvion,idOrigen,idDestino,fechaSalida,fechaLlegada,fechaCreacion}: CreateVueloDto){
        const usuario = this.VueloRepository.create({numeroVuelo,idAvion,idOrigen,idDestino,fechaSalida,fechaLlegada,fechaCreacion})
        return this.VueloRepository.save(usuario)
    }
    
    
}
