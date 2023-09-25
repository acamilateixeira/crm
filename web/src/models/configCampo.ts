import { TipoCampo } from './tipoCampo';

export interface ConfigCampo {
  id: number;
  idEtapa: number;
  posicao: number;
  nomeCampo: string;
  tipoCampo: TipoCampo;
  tamanhoCampo: number;
}
