import { useContext } from 'react';

import { ProcessosContext } from '../contexts/processos';

export function useProcessos() {
  const context = useContext(ProcessosContext);

  if (!context) {
    throw new Error('useProcessos must be used within an ProcessosProvider.');
  }

  return context;
}
