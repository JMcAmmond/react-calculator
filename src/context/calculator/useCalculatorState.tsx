import { useCallback, useMemo, useState } from 'react';
import { Operator } from '../../enums/operators';
import { IButtonDefinition } from '../../interfaces/IButtonDefinition';
import { IEntry } from '../../interfaces/IEntry';
import { Identifier } from '../../types/identifier';

export const useCalculatorState = () => {
  const [entries, setEntries] = useState<IEntry[]>([]);

  const [hasDotInNumberSequence, setHasDotInNumberSequence] = useState<boolean>(false);

  const isLastValueModifier = useMemo(() => {
    return entries.length > 0 && entries[entries.length - 1].operator === Operator.Modifier
  }, [entries]);

  const isEntriesEmpty = useMemo(() => entries.length === 0, [entries]);

  const isEntryAllowed = useCallback((operator: Operator, identifier: Identifier) => {
    if (
      (operator === Operator.Modifier && (isLastValueModifier || isEntriesEmpty)) ||
      (isEntriesEmpty && identifier === 'zero') ||
      (hasDotInNumberSequence && identifier === 'dot')
    ) {
      return false;
    }

    return true;
  }, [hasDotInNumberSequence, isEntriesEmpty, isLastValueModifier]);

  const updateDotSequence = useCallback((operator: Operator, identifier: Identifier) => {
    if (identifier === 'dot') {
      setHasDotInNumberSequence(true);
    } else if (operator === Operator.Modifier) {
      setHasDotInNumberSequence(false);
    }
  }, []);

  const addEntry = useCallback((buttonDefinition: IButtonDefinition) => {
    const { operator, identifier, value } = buttonDefinition;

    if (isEntryAllowed(operator, identifier)) {;
      updateDotSequence(operator, identifier);
      setEntries((prev) => {
        return [...prev, {value, operator, identifier}];
      });
    }
  }, [isEntryAllowed, updateDotSequence]);

  const output = useMemo(() => {
    return entries.length ? entries.map((num) => num.value).join('') : '0';
  }, [entries]);

  const calculate = useCallback(() => {
    if (!isLastValueModifier) {
      // eslint-disable-next-line no-eval
      const calc = eval(output);
      setEntries([{value: calc, operator: Operator.Number}]);
    }
  }, [output, isLastValueModifier]);

  const clear = useCallback(() => {
    setEntries([]);
    setHasDotInNumberSequence(false);
  }, []);

  const remove = useCallback(() => {
    setEntries((prev) => {
      const isLastValueDot = prev[prev.length - 1]?.identifier === 'dot';
      const toReturn = prev.slice(0, -1);

      if (isLastValueDot) {
        setHasDotInNumberSequence(false);
      }

      return [...toReturn];
    });
  }, []);

  return { entries, output, addEntry, calculate, clear, remove };
};