export function agenciaCooperativa(contaDominio: string) {
  return Number(contaDominio.substring(contaDominio.length - 7, contaDominio.length - 3));
}
