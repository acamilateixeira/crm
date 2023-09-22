const cpf = (cpf: string) =>
  cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11);

const cnpj = (cnpj: string) =>
  cnpj.slice(0, 2) +
  '.' +
  cnpj.slice(2, 5) +
  '.' +
  cnpj.slice(5, 8) +
  '/' +
  cnpj.slice(8, 12) +
  '-' +
  cnpj.slice(12, 14);

export function cpfCnpj(cpfCnpj: string | null) {
  if (!cpfCnpj) {
    return '-';
  }

  if (cpfCnpj.length === 11) {
    return cpf(cpfCnpj);
  }

  return cnpj(cpfCnpj);
}
