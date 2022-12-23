import { Identifier } from '../types/identifier';
import { Action } from './../enums/actions';
import { Operator } from './../enums/operators';

export interface IButtonDefinition {
  value: string;
  label: string;
  identifier: Identifier;
  operator: Operator;
  action: Action;
}
