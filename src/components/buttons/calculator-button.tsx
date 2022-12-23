import React, { useCallback } from 'react';
import { IButton } from '../../interfaces/IButton';
import { CalculatorButton } from './button.styles';

export const Button = ({ identifier, label, onClick, value, operator, action }: IButton) => {
  const handleOnClick = useCallback(() => {
    onClick(value, operator, action);
  }, [onClick, action, operator, value]);

  return ( 
    <CalculatorButton
      type="button"
      className={identifier}
      onClick={handleOnClick}
      area={identifier}>
      {label}
    </CalculatorButton>
  )
}