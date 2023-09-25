import { createContext, useState } from 'react';

import { Etapa } from '../models/etapa';

interface SteppersContextData {
  steps: Etapa[];
  totalSteps: () => void;
  completedSteps: () => void;
  isLastStep: () => void;
  allStepsCompleted: () => void;
  handleNext: () => void;
  handleBack: () => void;
  handleStep: (step: number) => void;
  handleComplete: (number: number) => void;
  handleReset: () => void;
  activeStep: number;
  setActiveStep: (number: number) => void;
  completed: { [step: number]: boolean };
  setCompleted: React.Dispatch<
    React.SetStateAction<{
      [k: number]: boolean;
    }>
  >;
}

interface SteppersContextProps {
  children: React.ReactNode;
}

export const SteppersContext = createContext({} as SteppersContextData);

export function SteppersProvider({ children }: SteppersContextProps) {
  const steps: Etapa[] = [
    { nome: 'PROCESSO', controller: '' },
    { nome: 'ETAPAS', controller: '' },
    { nome: 'CAMPOS', controller: '' },
    { nome: 'PERMISSÃO', controller: '' },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : Number(activeStep) + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = (step: number) => {
    const newCompleted = completed;
    newCompleted[step] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <SteppersContext.Provider
      value={{
        steps,
        totalSteps,
        completedSteps,
        isLastStep,
        allStepsCompleted,
        handleNext,
        handleBack,
        handleStep,
        handleComplete,
        handleReset,
        activeStep,
        setActiveStep,
        completed,
        setCompleted,
      }}
    >
      {children}
    </SteppersContext.Provider>
  );
}
