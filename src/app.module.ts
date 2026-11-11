import { Module } from '@nestjs/common';
import { DocentesModule } from './docentes/docentes.module';
import { AsignaturasModule } from './asignaturas/asignaturas.module';

@Module({
  imports: [
    DocentesModule,
    AsignaturasModule,
  ],
})
export class AppModule {}
