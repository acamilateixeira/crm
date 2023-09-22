export function removerCaracteresEspeciais(string: string) {
  if (!string) {
    return '';
  }

  return string.replace(/\D/g, '');
}
