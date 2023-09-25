import { ConfigEtapa } from './configEtapa';
import { ConfigPermissao } from './configPermissao';

export interface Processo {
  id: number;
  nome: string;
  descricao: string;

  configPermissao: ConfigPermissao;
  etapas: ConfigEtapa[];
}
