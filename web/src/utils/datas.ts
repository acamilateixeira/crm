import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function brData(data: string | null | undefined) {
  if (!data) {
    return '-';
  }

  const [year, month, day] = data.split('-');

  return day + '/' + month + '/' + year;
}

export function brDataReferencia(data: string | null | undefined) {
  if (!data) {
    return '-';
  }

  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const [year, month] = data.split('-');

  return months[Number(month) - 1] + ' de ' + year;
}

export function dataReferenciaRecebida(data: string | null | undefined) {
  if (!data == null || data === undefined) {
    if (!data) {
      return '-';
    }

    const [year, month] = data.split('-');

    const day = '01';

    return day + ' - ' + month + ' - ' + year;
  }
}

export function dataPegarMesAno(data: string | null | undefined) {

  if (!data) {
    return '-';
  }

  const [year, month, day] = data.split('-');

  day.split('-').pop();

  return year + '-' + month;

}

export function brDataExtenso(data: Date | null = new Date()) {
  if (!data) {
    return format(new Date(), "d 'de' MMMM 'de' yyyy ',' k:mm", {
      locale: ptBR,
    });
  }

  return format(data, "d 'de' MMMM 'de' yyyy ',' k:mm", {
    locale: ptBR,
  });
}
