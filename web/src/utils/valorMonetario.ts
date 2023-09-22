export function brValorMonetario(valorMonetario: number | null) {
  if (!valorMonetario) {
    return '-';
  }

  return valorMonetario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

export function trocarPontoPorVirgula(valorMonetario: string) {
  return valorMonetario.replace('.', ',');
}

export function trocarVirgulaPorPonto(valorMonetario: string) {
  return valorMonetario.replace(',', '.');
}
