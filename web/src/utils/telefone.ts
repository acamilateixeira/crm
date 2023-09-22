// const celular = (phoneNumber: string) =>
//   '(' + phoneNumber.slice(0, 2) + ') ' + phoneNumber.slice(2, 7) + '-' + phoneNumber.slice(7, 11);

// const fixo = (phoneNumber: string) =>
//   '(' + phoneNumber.slice(0, 2) + ') ' + phoneNumber.slice(2, 6) + '-' + phoneNumber.slice(6, 10);

export function telefone(phoneNumber: string | null) {
  if (!phoneNumber) {
    return '-';
  }

  return phoneNumber;
}
