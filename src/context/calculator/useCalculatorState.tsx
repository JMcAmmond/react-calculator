import { useCallback, useMemo, useState } from 'react';
import { Operator } from '../../enums/operators';
import { ICalculatorNumber } from '../../interfaces/ICalculatorNumber';

export const useCalculatorState = () => {
  const [values, setValues] = useState<ICalculatorNumber[]>([]);

  const display = useMemo(() => {
    return values.length ? values.map((num) => num.value).join('') : '0';
  }, [values]);

  const isLastValueModifier = useMemo(() => {
    return values.length > 0 && values[values.length - 1].operator === Operator.Modifier
  }, [values]);

  const addValue = useCallback((value: string, operator: Operator) => {
    if (operator === Operator.Modifier && (isLastValueModifier || values.length === 0)) {
      return;
    }

    setValues((prev) => {
      return [...prev, {value, operator}]
    });
  }, [isLastValueModifier, values.length]);

  const calculate = useCallback(() => {
    if (!isLastValueModifier) {
      // eslint-disable-next-line no-eval
      const calc = eval(display);
      setValues([{value: calc, operator: Operator.Number}]);
    }
  }, [display, isLastValueModifier]);

  const clear = useCallback(() => {
    setValues([]);
  }, []);

  return { values, display, addValue, calculate, clear };
};