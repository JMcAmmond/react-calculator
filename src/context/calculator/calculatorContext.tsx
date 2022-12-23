import { createContext, useContext } from 'react';
import { ICalculatorState } from '../../interfaces/ICalculatorState';

export const CalculatorContext = createContext<ICalculatorState>({
  equation: '',
  lastEquation: '',
  calculation: '',
  addEntry: () => {},
  calculate: () => {},
  clear: () => {},
  remove: () => {}
});

export const useCalculatorContext = () => useContext(CalculatorContext);