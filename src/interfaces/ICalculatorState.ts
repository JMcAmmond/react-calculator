import { Operator } from './../enums/operators';
import { IEntry } from "./IEntry";

export interface ICalculatorState {
  entries: IEntry[];
  output: string;
  addEntry: (value: string, operator: Operator) => void;
  calculate: () => void;
  clear: () => void;
  remove: () => void;
}