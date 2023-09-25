import { useContext } from 'react';

import { SteppersContext } from '../contexts/steppers';

export function useSteppers() {
  const context = useContext(SteppersContext);

  if (!context) {
    throw new Error('useSteppers must be used within an SteppersProvider.');
  }

  return context;
}
