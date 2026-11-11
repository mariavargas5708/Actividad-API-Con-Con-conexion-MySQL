
import { Injectable } from '@nestjs/common';
import { conexion } from '../db';

@Injectable()
export class DocentesService {

  async obtenerDocentes() {
    const [resultado] = await conexion.query(
      'SELECT * FROM docentes'
    );

    return resultado;
  }

  async crearDocente(datos: any) {
    const { nombres, apellidos, correo, telefono } = datos;

    const [resultado]: any = await conexion.query(
      `INSERT INTO docentes
      (nombres, apellidos, correo, telefono)
      VALUES (?, ?, ?, ?)`,
      [nombres, apellidos, correo, telefono]
    );

    return {
      mensaje: 'Docente registrado correctamente',
      id: resultado.insertId
    };
  }
}
