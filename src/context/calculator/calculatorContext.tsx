import { createContext, useContext } from 'react';
import { ICalculatorState } from '../../interfaces/ICalculatorState';

export const CalculatorContext = createContext<ICalculatorState>({
  entries: [],
  output: '',
  addEntry: () => {},
  calculate: () => {},
  clear: () => {},
  remove: () => {}
});

export const useCalculatorContext = () => useContext(CalculatorContext);