import { IEntry } from './IEntry';
import { IButtonDefinition } from './IButtonDefinition';

export interface ICalculatorState {
  entries: IEntry[];
  output: string;
  addEntry: (buttonDefinition: IButtonDefinition) => void;
  calculate: () => void;
  clear: () => void;
  remove: () => void;
}