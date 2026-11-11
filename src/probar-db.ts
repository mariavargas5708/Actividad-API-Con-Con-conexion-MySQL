import 'dotenv/config';
import { conexion } from './db';

async function verificarConexion() {
  try {
    const [resultado] = await conexion.query(
      'SELECT 1 AS conexion_exitosa'
    );

    console.log('¡Conexión con MySQL exitosa!', resultado);
  } catch (error) {
    console.error('Error de conexión:', error);
  } finally {
    await conexion.end();
  }
}

verificarConexion();