import { Action } from './../enums/actions';
import { Operator } from './../enums/operators';

type Identifier = 
  'zero' | 'one' | 'two' | 'three' | 'four' | 'five' | 'six' |
  'seven' | 'eight' | 'nine' | 'dot' | 'equals' | 'divide' |
  'multiple' | 'add' | 'subtract' | 'clear' | 'delete';

export interface IButtonDefinition {
  value: string;
  label: string;
  identifier: Identifier;
  operator: Operator;
  action: Action;
}
