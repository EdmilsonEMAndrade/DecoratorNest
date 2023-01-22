import { Injectable } from '@nestjs/common';
import { JornadaHandlerService } from './jornada/JornadaHandlerService';

@Injectable()
export class TesteService {

  constructor(
    private readonly jornada: JornadaHandlerService
    ) { }
  async executarTeste() {
    var parametros : SaudeSeguradoParametros = {
      origem: "portal",
      ci:"ident",
      password: "123"
    }
    return await this.jornada.handleJornada("SAUDE", "SEGURADO",parametros);
  }
}
