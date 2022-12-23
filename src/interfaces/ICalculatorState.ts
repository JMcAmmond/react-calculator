import { IButtonDefinition } from './IButtonDefinition';

export interface ICalculatorState {
  equation: string;
  lastEquation: string;
  calculation: string;
  addEntry: (buttonDefinition: IButtonDefinition) => void;
  calculate: () => void;
  clear: () => void;
  remove: () => void;
}