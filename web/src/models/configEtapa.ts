import { ConfigCampo } from './configCampo';

export interface ConfigEtapa {
  id: number;
  idProcesso: number;
  nomeEtapa: string;
  descricao: string;
  posicao: number;
  campos: ConfigCampo[];
}
