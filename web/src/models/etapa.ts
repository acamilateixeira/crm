export interface State  {
  completed: { [k: number]: boolean };
  activeStep: number;
};

export interface Etapa {
  controller: string
  nome: string
};