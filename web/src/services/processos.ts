import api from '../http/api';
import { Processo } from '../models/processo';

class ProcessosServices {
  async index() {
    const { data } = await api.get('/processos');

    return data as Processo[];
  }

  async store(processo: Omit<Processo, 'id' | 'etapas'>) {
    try {
      const { data } = await api.post(`/processos`, processo);

      return {
        message: data.message,
        processos: data.processos as Processo[],
        criado: data.processo as Processo,
      };
    } catch (error: any) {
      return {
        message: error.response ? error.response.data.message : 'Erro de comunicação',
      };
    }
  }

  async update(idProcesso: number, processo: Omit<Processo, 'id'>) {
    try {
      const { data } = await api.put(`/processos/${idProcesso}`, processo);

      return {
        message: data.message,
        processos: data.processos as Processo[],
      };
    } catch (error: any) {
      return {
        message: error.response ? error.response.data.message : 'Erro de comunicação',
      };
    }
  }

  async destroy(idProcesso: number) {
    try {
      const { data } = await api.delete(`/processos/${idProcesso}`);

      return {
        message: data.message,
        processos: data.processos as Processo[],
      };
    } catch (error: any) {
      return {
        message: error.response ? error.response.data.message : 'Erro de comunicação',
      };
    }
  }
}

export default new ProcessosServices();
