import React, { useCallback } from 'react';
import { useCalculatorContext } from '../../../context/calculator/calculatorContext';
import { buttonDefinitions } from '../../../definitions/buttonDefinitions';
import { Action } from '../../../enums/actions';
import { Button } from './button';
import { ButtonGrid } from './button.styles';
import { IButtonDefinition } from '../../../interfaces/IButtonDefinition';

export const ButtonGroup = () => {
  const { addEntry, calculate, clear, remove } = useCalculatorContext();

  const handleOnClick = useCallback((definition: IButtonDefinition) => {
    switch (definition.action) {
      case Action.Calculate:
        calculate();
        break;
      case Action.Clear:
        clear();
        break;
      case Action.Delete:
        remove();
        break;
      case Action.Add:
      default:
        addEntry(definition);
        break;
    }
  }, [addEntry, calculate, clear, remove]);

  return (
    <ButtonGrid>
      {buttonDefinitions.map((button) => {
        return (
          <Button key={button.identifier} onClick={handleOnClick} {...button} />
        )
      })}
    </ButtonGrid>
  )
}