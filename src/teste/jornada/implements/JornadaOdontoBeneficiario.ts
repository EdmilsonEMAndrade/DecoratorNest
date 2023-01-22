import { Injectable, Scope } from '@nestjs/common';
import { Jornada, JornadaService } from '../JornadaService';

@Jornada('ODONTO', 'BENEFICIARIO')
@Injectable({ scope: Scope.TRANSIENT })
export class JornadaOdontoBeneficiario implements JornadaService<OdontoBeneficiarioParametros, String> {
  run(parametros:OdontoBeneficiarioParametros): String {
    return `Odonto Beneficiario`;
  }
}