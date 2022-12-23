import React from 'react';
import { useCalculatorContext } from '../../../context/calculator/calculatorContext';
import { ScreenContainer } from './screen.styles';

export const Screen = () => {
  const { output } = useCalculatorContext();

  return <ScreenContainer>{output}</ScreenContainer>
}