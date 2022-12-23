import React from 'react';
import { useCalculatorContext } from '../../../context/calculator/calculatorContext';
import { ScreenContainer, History, Output } from './screen.styles';

export const Screen = () => {
  const { equation, calculation, lastEquation } = useCalculatorContext();

  return (
    <ScreenContainer>
      <History>{lastEquation}</History>
      <Output>{equation ? equation : calculation}</Output>
    </ScreenContainer>
  )
}