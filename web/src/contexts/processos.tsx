import { createContext, useState } from 'react';

import { Processo } from '../models/processo';

interface ProcessosContextData {
  processo: Processo;
  processos: Processo[];
  setProcesso: (processo: Processo) => void;
  setProcessos: (processos: Processo[]) => void;
}

interface ProcessosContextProps {
  children: React.ReactNode;
}

export const ProcessosContext = createContext({} as ProcessosContextData);

export function ProcessosProvider({ children }: ProcessosContextProps) {
  const [processo, setProcesso] = useState({} as Processo);
  const [processos, setProcessos] = useState({} as Processo[]);

  return (
    <ProcessosContext.Provider
      value={{
        processo,
        processos,
        setProcesso,
        setProcessos,
      }}
    >
      {children}
    </ProcessosContext.Provider>
  );
}
