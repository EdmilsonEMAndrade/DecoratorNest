import { Injectable, Inject } from '@nestjs/common';
import { JornadaService, Jornada } from './JornadaService';
import 'reflect-metadata';


@Injectable()
export class JornadaHandlerService {
  constructor(@Inject(Jornada) private readonly jornadaServices: JornadaService<any, any>[]) {}

  public async handleJornada(produto: string, central: string, parametros: any): Promise<string> {
    const jornadaService = this.jornadaServices
      .find(service => 
        Reflect.getMetadata('produto', service) === produto && 
        Reflect.getMetadata('central', service) === central);
    if (!jornadaService) {
      throw new Error(`Jornada não encontrada para o produto: ${produto} e central: ${central}`);
    }
    return jornadaService.run(parametros);
  }
}