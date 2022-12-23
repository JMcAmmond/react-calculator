import { PropsWithChildren } from 'react';
import { CalculatorContext } from './calculatorContext';
import { useCalculatorState } from './useCalculatorState';

export const CalculatorProvider = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
  const { entries, output, addEntry, calculate, clear, remove } = useCalculatorState();

  return (
    <CalculatorContext.Provider
      value={{
        entries, output, addEntry, calculate, clear, remove
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
