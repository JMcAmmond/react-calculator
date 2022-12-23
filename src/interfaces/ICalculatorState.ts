import { Operator } from './../enums/operators';
import { ICalculatorNumber } from "./ICalculatorNumber";

export interface ICalculatorState {
  entries: ICalculatorNumber[];
  output: string;
  addEntry: (value: string, operator: Operator) => void;
  calculate: () => void;
  clear: () => void;
}