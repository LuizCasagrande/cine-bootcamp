import {Ator} from './Ator';
import {ClassificacaoEnum} from '../enumerations/classificacao.enum';
import {Studio} from './Studio';

export class Filme {
  id: number;
  titulo: string;
  dataLancamento: Date;
  precoBilhete: number;
  dataCadastro: Date;
  genero: string;
  atorList: Ator[];
  classificacao: ClassificacaoEnum;
  inativo: boolean;
  formato: number;
  studio: Studio[];

  constructor() {
    this.dataCadastro = new Date();
    this.atorList = [];
    this.inativo = false;
  }
}
