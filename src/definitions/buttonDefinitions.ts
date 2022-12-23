import { IButtonDefinition } from '../interfaces/IButtonDefinition';
import { Action } from './../enums/actions';
import { Operator } from './../enums/operators';

export const buttonDefinitions: IButtonDefinition[] = [
  { identifier: 'zero', label: '0', value: '0', operator: Operator.Number, action: Action.Add },
  { identifier: 'one', label: '1', value: '1', operator: Operator.Number, action: Action.Add },
  { identifier: 'two', label: '2', value: '2', operator: Operator.Number, action: Action.Add },
  { identifier: 'three', label: '3', value: '3', operator: Operator.Number, action: Action.Add },
  { identifier: 'four', label: '4', value: '4', operator: Operator.Number, action: Action.Add },
  { identifier: 'five', label: '5', value: '5', operator: Operator.Number, action: Action.Add },
  { identifier: 'six', label: '6', value: '6', operator: Operator.Number, action: Action.Add },
  { identifier: 'seven', label: '7', value: '7', operator: Operator.Number, action: Action.Add },
  { identifier: 'eight', label: '8', value: '8', operator: Operator.Number, action: Action.Add },
  { identifier: 'nine', label: '9', value: '9', operator: Operator.Number, action: Action.Add },
  { identifier: 'dot', label: '.', value: '.', operator: Operator.Modifier, action: Action.Add },
  { identifier: 'equals', label: '=', value: '=', operator: Operator.Modifier, action: Action.Calculate },
  { identifier: 'divide', label: '÷', value: '/', operator: Operator.Modifier, action: Action.Add },
  { identifier: 'multiple', label: 'x', value: '*', operator: Operator.Modifier, action: Action.Add },
  { identifier: 'add', label: '+', value: '+', operator: Operator.Modifier, action: Action.Add },
  { identifier: 'subtract', label: '-', value: '-', operator: Operator.Modifier, action: Action.Add },
  { identifier: 'clear', label: 'AC', value: 'AC', operator: Operator.Modifier, action: Action.Clear },
  { identifier: 'delete', label: '←', value: 'DEL', operator: Operator.Modifier, action: Action.Delete },
];