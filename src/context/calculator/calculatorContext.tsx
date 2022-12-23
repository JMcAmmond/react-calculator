import { createContext, useContext } from 'react';
import { ICalculatorState } from '../../interfaces/ICalculatorState';

export const CalculatorContext = createContext<ICalculatorState>({
  values: [],
  display: '',
  addValue: () => {},
  calculate: () => {},
  clear: () => {}
});

export const useCalculatorContext = () => useContext(CalculatorContext);