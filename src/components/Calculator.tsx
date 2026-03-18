import React, { useState } from 'react';
import { Display } from './Display';
import { Button } from './Button';
import { calculate } from '../utils/math';

export const Calculator: React.FC = () => {
  const [currentValue, setCurrentValue] = useState<string>('0');
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  const handleDigit = (digit: string) => {
    setCurrentValue(prev => (prev === '0' ? digit : prev + digit));
  };

  const handleOperator = (op: string) => {
    setPreviousValue(currentValue);
    setOperator(op);
    setCurrentValue('0');
  };

  const handleEquals = () => {
    if (previousValue && operator) {
      const result = calculate(parseFloat(previousValue), parseFloat(currentValue), operator);
      setCurrentValue(result.toString());
      setPreviousValue(null);
      setOperator(null);
    }
  };

  const handleClear = () => {
    setCurrentValue('0');
    setPreviousValue(null);
    setOperator(null);
  };

  return (
    <div className="max-w-xs mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <Display value={currentValue} />
      <div className="grid grid-cols-4 gap-2">
        {['7', '8', '9', '/'].map(btn => (
          <Button key={btn} label={btn} onClick={() => isNaN(Number(btn)) ? handleOperator(btn) : handleDigit(btn)} variant={isNaN(Number(btn)) ? 'operator' : 'default'} />
        ))}
        {['4', '5', '6', '*'].map(btn => (
          <Button key={btn} label={btn} onClick={() => isNaN(Number(btn)) ? handleOperator(btn) : handleDigit(btn)} variant={isNaN(Number(btn)) ? 'operator' : 'default'} />
        ))}
        {['1', '2', '3', '-'].map(btn => (
          <Button key={btn} label={btn} onClick={() => isNaN(Number(btn)) ? handleOperator(btn) : handleDigit(btn)} variant={isNaN(Number(btn)) ? 'operator' : 'default'} />
        ))}
        <Button label="0" onClick={() => handleDigit('0')} />
        <Button label="C" onClick={handleClear} />
        <Button label="=" onClick={handleEquals} variant="operator" />
        <Button label="+" onClick={() => handleOperator('+')} variant="operator" />
      </div>
    </div>
  );
};
