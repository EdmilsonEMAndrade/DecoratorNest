import { Injectable, Scope } from '@nestjs/common';
import { Jornada, JornadaService } from '../JornadaService';


@Jornada('SAUDE', 'SEGURADO')
@Injectable({ scope: Scope.TRANSIENT })
export class JornadaSaudeSegurado implements JornadaService<SaudeSeguradoParametros, String> {
  run(parametros: SaudeSeguradoParametros): String {
      return 'Saude Segurado';
  }
}