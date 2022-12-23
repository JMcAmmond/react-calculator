import { Identifier } from './../types/identifier';
import { Operator } from '../enums/operators';

export interface IEntry {
  value: string;
  operator: Operator;
  identifier?: Identifier;
}