import { useCallback, useMemo, useState } from 'react';
import { Operator } from '../../enums/operators';
import { IButtonDefinition } from '../../interfaces/IButtonDefinition';
import { IEntry } from '../../interfaces/IEntry';
import { Identifier } from '../../types/identifier';

export const useCalculatorState = () => {
  const [history, setHistory] = useState<IEntry[][]>([]);
  const [entries, setEntries] = useState<IEntry[]>([]);
  const [calculation, setCalculation] = useState<string>('');
  const [hasDotInNumberSequence, setHasDotInNumberSequence] = useState<boolean>(false);

  const equation = useMemo(() => {
    return entries.map((num) => num.value).join('') ?? '';
  }, [entries]);

  const lastEquation = useMemo(() => {
    return history.at(-1)?.map((num) => num.value).join('') ?? '';
  }, [history]);

  const isLastValueModifier = useMemo(() => {
    return entries.length > 0 && entries.at(-1)?.operator === Operator.Modifier
  }, [entries]);

  const isEntriesEmpty = useMemo(() => entries.length === 0, [entries]);

  const updateHistroy = useCallback(() => {
    setHistory((prev) => [...prev, entries]);
  }, [entries]);

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

  const calculate = useCallback(() => {
    if (!isLastValueModifier && equation !== '') {
      // eslint-disable-next-line no-eval
      const calc = eval(equation);
      updateHistroy();
      setEntries([]);
      setCalculation(calc);
    }
  }, [isLastValueModifier, equation, updateHistroy]);

  const clear = useCallback(() => {
    setEntries([]);
    setHasDotInNumberSequence(false);
    setCalculation('');
  }, []);

  const remove = useCallback(() => {
    setEntries((prev) => {
      const isLastValueDot = prev.at(-1)?.identifier === 'dot';
      const toReturn = prev.slice(0, -1);

      if (isLastValueDot) {
        setHasDotInNumberSequence(false);
      }

      return [...toReturn];
    });
  }, []);

  return { equation, lastEquation, calculation, addEntry, calculate, clear, remove };
};