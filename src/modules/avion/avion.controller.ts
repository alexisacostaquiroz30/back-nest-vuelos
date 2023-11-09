import { Controller, Body, Delete,Get, Post } from '@nestjs/common';
import { AvionService } from './avion.service';


@Controller('Avion')
export class AvionController {
    constructor(private readonly AvionService: AvionService ){

    }

}
