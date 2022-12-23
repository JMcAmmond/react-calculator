import React from 'react';
import { CalculatorProvider } from '../../context/calculator/calculatorProvider';
import { ButtonGroup } from './buttons';
import { Screen } from './screen';
import { CalculatorContainer } from './calculator.styles';

export const Calculator = () => {
  return (
    <CalculatorProvider>
      <CalculatorContainer>
        <Screen />
        <ButtonGroup />
      </CalculatorContainer>
    </CalculatorProvider>
  )
}