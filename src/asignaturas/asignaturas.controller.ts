
import { Controller, Get, Post, Body } from '@nestjs/common';
import { AsignaturasService } from './asignaturas.service';

@Controller('asignaturas')
export class AsignaturasController {

  constructor(
    private readonly asignaturasService: AsignaturasService
  ) {}

  @Get()
  obtenerAsignaturas() {
    return this.asignaturasService.obtenerAsignaturas();
  }

  @Post()
  crearAsignatura(@Body() datos: any) {
    return this.asignaturasService.crearAsignatura(datos);
  }
}
