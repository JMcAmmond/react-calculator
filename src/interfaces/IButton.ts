import { IButtonDefinition } from './IButtonDefinition';

export interface IButton extends IButtonDefinition {
  onClick: (buttonDefinition: IButtonDefinition) => void;
}