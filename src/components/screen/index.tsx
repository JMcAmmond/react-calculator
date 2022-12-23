import React from 'react';
import { useCalculatorContext } from '../../context/calculator/calculatorContext';
import { Display } from './screen.styles';

export const Screen = () => {
  const { display } = useCalculatorContext();

  return <Display>{display}</Display>
}