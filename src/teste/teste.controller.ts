import { Controller, Get} from '@nestjs/common';
import { TesteService } from './teste.service';

@Controller('teste')
export class TesteController {
  constructor(private readonly testeService: TesteService) {}

  @Get()
  executarTeste() {
    return this.testeService.executarTeste();
  }

}
