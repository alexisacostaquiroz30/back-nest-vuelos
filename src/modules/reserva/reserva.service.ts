import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


import { Reserva } from 'src/models/entities/';
import { CreateReservaDto } from './dto';

@Injectable()
export class ReservaService {

    constructor( @InjectRepository(Reserva) private readonly ReservaRepository: Repository<Reserva>){

    }

    async findAll(): Promise<Reserva[]>{
        return this.ReservaRepository
        .createQueryBuilder('reserva')
        .leftJoinAndSelect('reserva.idCliente2', 'usuario')
        .leftJoinAndSelect('reserva.idVuelo2', 'vuelo')
        .select(['reserva', 'usuario.nombre','usuario.apellidos','vuelo.numeroVuelo'])
        .getMany();
    }

    async findOne(idVuelo: number){
        return this.ReservaRepository
        .createQueryBuilder('reserva')
        .leftJoinAndSelect('reserva.idCliente2', 'usuario')
        .leftJoinAndSelect('reserva.idVuelo2', 'vuelo')
        .select(['reserva', 'usuario.nombre','usuario.apellidos','vuelo.numeroVuelo'])
        .where('reserva.idReserva = :idVuelo',{idVuelo})
        .getMany();
    }

    async findOneCliente(idCliente: number){
        return this.ReservaRepository
        .createQueryBuilder('reserva')
        .leftJoinAndSelect('reserva.idCliente2', 'usuario')
        .leftJoinAndSelect('reserva.idVuelo2', 'vuelo')
        .leftJoinAndSelect('vuelo.idOrigen', 'id_origen')
        .leftJoinAndSelect('vuelo.idDestino', 'id_destino')
        .select(['reserva', 'usuario.nombre','usuario.apellidos','vuelo','id_origen','id_destino'])
        .where('reserva.idCliente2 = :idCliente',{idCliente})
        .getMany();
    }

    async crearReserva({idCliente2,idVuelo2,numeroFila,numeroAsiento}: CreateReservaDto){
        const reserva = this.ReservaRepository.create({idCliente2,idVuelo2,numeroFila,numeroAsiento})
        return this.ReservaRepository.save(reserva)
    }

    async eliminarReserva(id: number){
        const reserva: Reserva = await this.ReservaRepository.findOne({
            where:{
                idReserva : id
            }
        });

        if(!reserva){
            throw new NotFoundException('Registro no encontrado')
        }

        this.ReservaRepository.remove(reserva);
    }
    
}
