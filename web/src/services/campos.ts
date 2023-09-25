import api from '../http/api';
import { ConfigCampo } from '../models/configCampo';
import { Processo } from '../models/processo';

class CamposServices {
  async index() {
    const { data } = await api.get('/campos');

    return data as ConfigCampo[];
  }

  async store(campo: Omit<ConfigCampo, 'id' | 'campos'>) {
    try {
      const { data } = await api.post(`/campos`, campo);

      return {
        message: data.message,
        processos: data.campos as Processo[],
      };
    } catch (error: any) {
      return {
        message: error.response ? error.response.data.message : 'Erro de comunicação',
      };
    }
  }

  async update(idCampo: number, campo: Omit<ConfigCampo, 'id'>) {
    try {
      const { data } = await api.put(`/campos/${idCampo}`, campo);

      return {
        message: data.message,
        processos: data.campos as Processo[],
      };
    } catch (error: any) {
      return {
        message: error.response ? error.response.data.message : 'Erro de comunicação',
      };
    }
  }

  async destroy(idCampo: number) {
    try {
      const { data } = await api.delete(`/campos/${idCampo}`);

      return {
        message: data.message,
        processos: data.campos as Processo[],
      };
    } catch (error: any) {
      return {
        message: error.response ? error.response.data.message : 'Erro de comunicação',
      };
    }
  }
}

export default new CamposServices();
