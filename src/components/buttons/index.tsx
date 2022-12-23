import React, { useCallback } from 'react';
import { useCalculatorContext } from '../../context/calculator/calculatorContext';
import { buttonDefinitions } from '../../definitions/buttonDefinitions';
import { Action } from '../../enums/actions';
import { Button } from './calculator-button';
import { ButtonLayout } from './button.styles';
import { Operator } from '../../enums/operators';

export const Buttons = () => {
  const { addValue, calculate, clear } = useCalculatorContext();

  const handleOnClick = useCallback((value: string, operator: Operator, action: Action) => {
    switch (action) {
      case Action.Calculate:
        calculate();
        break;
      case Action.Clear:
        clear();
        break;
      case Action.Add:
      default:
        addValue(value, operator);
        break;
    }
  }, [addValue, calculate, clear]);

  return (
    <ButtonLayout>
      {buttonDefinitions.map((button) => {
        return (
          <Button key={button.identifier} onClick={handleOnClick} {...button} />
        )
      })}
    </ButtonLayout>
  )
}