import { CrearDocenteDto } from './dto crear/crear-docentes.dto';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { DocentesService } from './docentes.service';

@Controller('docentes')
export class DocentesController {

  constructor(private readonly docentesService: DocentesService) {}

  @Get()
  obtenerDocentes() {
    return this.docentesService.obtenerDocentes();
  }

 @Post()
 crearDocente(@Body() datos: CrearDocenteDto) {
  return this.docentesService.crearDocente(datos);
}
}
