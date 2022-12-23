import { useCallback, useMemo, useState } from 'react';
import { Operator } from '../../enums/operators';
import { ICalculatorNumber } from '../../interfaces/ICalculatorNumber';

export const useCalculatorState = () => {
  const [entries, setEntries] = useState<ICalculatorNumber[]>([]);

  const output = useMemo(() => {
    return entries.length ? entries.map((num) => num.value).join('') : '0';
  }, [entries]);

  const isLastValueModifier = useMemo(() => {
    return entries.length > 0 && entries[entries.length - 1].operator === Operator.Modifier
  }, [entries]);

  const addEntry = useCallback((value: string, operator: Operator) => {
    if (operator === Operator.Modifier && (isLastValueModifier || entries.length === 0)) {
      return;
    }

    setEntries((prev) => {
      return [...prev, {value, operator}]
    });
  }, [isLastValueModifier, entries.length]);

  const calculate = useCallback(() => {
    if (!isLastValueModifier) {
      // eslint-disable-next-line no-eval
      const calc = eval(output);
      setEntries([{value: calc, operator: Operator.Number}]);
    }
  }, [output, isLastValueModifier]);

  const clear = useCallback(() => {
    setEntries([]);
  }, []);

  return { entries, output, addEntry, calculate, clear };
};