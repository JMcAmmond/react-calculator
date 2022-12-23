import React, { useCallback } from 'react';
import { IButton } from '../../../interfaces/IButton';
import { CalculatorButton } from './button.styles';

export const Button = (props: IButton) => {
  const { identifier, label, onClick, operator, action, value } = props;

  const handleOnClick = useCallback(() => {
    onClick({ identifier, label, operator, action, value });
  }, [action, identifier, label, onClick, operator, value]);

  return ( 
    <CalculatorButton
      type="button"
      className={`${identifier} ${operator}`}
      onClick={handleOnClick}
      area={identifier}>
      {label}
    </CalculatorButton>
  )
}