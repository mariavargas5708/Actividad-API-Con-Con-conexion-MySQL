
import { Injectable, NotFoundException } from '@nestjs/common';
import { conexion } from '../db';

@Injectable()
export class AsignaturasService {

  async obtenerAsignaturas() {
    const [resultado] = await conexion.query(`
      SELECT a.id, a.nombre, a.descripcion,
             a.creditos, a.docente_id,
             d.nombres, d.apellidos
      FROM asignaturas a
      INNER JOIN docentes d
      ON a.docente_id = d.id
    `);

    return resultado;
  }

  async crearAsignatura(datos: any) {
    const { nombre, descripcion, creditos, docente_id } = datos;

    const [docentes]: any = await conexion.query(
      'SELECT id FROM docentes WHERE id = ?',
      [docente_id]
    );

    if (docentes.length === 0) {
      throw new NotFoundException('El docente no existe');
    }

    const [resultado]: any = await conexion.query(
      `INSERT INTO asignaturas
      (nombre, descripcion, creditos, docente_id)
      VALUES (?, ?, ?, ?)`,
      [nombre, descripcion, creditos, docente_id]
    );

    return {
      mensaje: 'Asignatura registrada correctamente',
      id: resultado.insertId
    };
  }
}
