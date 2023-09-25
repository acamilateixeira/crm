import api from '../http/api';
import { ConfigEtapa } from '../models/configEtapa';
import { Processo } from '../models/processo';

class EtapasServices {
  async index() {
    const { data } = await api.get('/etapas');

    return data as ConfigEtapa[];
  }

  async store(etapa: Omit<ConfigEtapa, 'id' | 'campos'>) {
    try {
      const { data } = await api.post(`/etapas`, etapa);

      return {
        message: data.message,
        processos: data.etapas as Processo[],
      };
    } catch (error: any) {
      return {
        message: error.response ? error.response.data.message : 'Erro de comunicação',
      };
    }
  }

  async update(idEtapa: number, etapa: Omit<ConfigEtapa, 'id'>) {
    try {
      const { data } = await api.put(`/etapas/${idEtapa}`, etapa);

      return {
        message: data.message,
        processos: data.etapas as Processo[],
      };
    } catch (error: any) {
      return {
        message: error.response ? error.response.data.message : 'Erro de comunicação',
      };
    }
  }

  async destroy(idEtapa: number) {
    try {
      const { data } = await api.delete(`/etapas/${idEtapa}`);

      return {
        message: data.message,
        processos: data.etapas as Processo[],
      };
    } catch (error: any) {
      return {
        message: error.response ? error.response.data.message : 'Erro de comunicação',
      };
    }
  }
}

export default new EtapasServices();
