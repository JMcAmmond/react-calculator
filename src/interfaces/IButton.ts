import { Operator } from './../enums/operators';
import { Action } from './../enums/actions';
import { IButtonDefinition } from './IButtonDefinition';

export interface IButton extends IButtonDefinition {
  onClick: (value: string, operator: Operator, action: Action) => void;
}