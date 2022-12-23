import { PropsWithChildren } from 'react';
import { CalculatorContext } from './calculatorContext';
import { useCalculatorState } from './useCalculatorState';

export const CalculatorProvider = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
  const { display, values, addValue, calculate, clear } = useCalculatorState();

  return (
    <CalculatorContext.Provider
      value={{
        display, values, addValue, calculate, clear
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
