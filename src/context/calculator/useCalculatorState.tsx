import { useCallback, useMemo, useState } from 'react';
import { Operator } from '../../enums/operators';
import { IEntry } from '../../interfaces/IEntry';

export const useCalculatorState = () => {
  const [entries, setEntries] = useState<IEntry[]>([]);

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

    if (entries.length === 0 && value === '0') {
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

  const remove = useCallback(() => {
    setEntries((prev) => {
      const toReturn = prev.slice(0, -1);
      return [...toReturn];
    });
  }, []);

  return { entries, output, addEntry, calculate, clear, remove };
};