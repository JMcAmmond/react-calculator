import { Operator } from './../enums/operators';
import { ICalculatorNumber } from "./ICalculatorNumber";

export interface ICalculatorState {
  values: ICalculatorNumber[];
  display: string;
  addValue: (input: string, operator: Operator) => void;
  calculate: () => void;
  clear: () => void;
}