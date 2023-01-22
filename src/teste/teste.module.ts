import { Module } from '@nestjs/common';
import { TesteService } from './teste.service';
import { TesteController } from './teste.controller';
import { JornadaOdontoBeneficiario } from './jornada/implements/JornadaOdontoBeneficiario';
import { JornadaSaudeSegurado } from './jornada/implements/JornadaSaudeSegurado';
import { JornadaHandlerService } from './jornada/JornadaHandlerService';
import { Jornada } from './jornada/JornadaService';

const jornadaServices = [JornadaOdontoBeneficiario, JornadaSaudeSegurado];
@Module({
  controllers: [TesteController],
  providers: [TesteService, JornadaHandlerService, { provide: Jornada, useValue: jornadaServices }]
})
export class TesteModule {}
