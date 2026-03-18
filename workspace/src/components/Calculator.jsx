import React from 'react';
import Display from './Display';
import Keypad from './Keypad';

const Calculator = ({ onOperation, onClear, currentValue }) => {
  const handleButtonClick = (value) => {
    if (value === 'C') {
      onClear();
    } else if (value === '+' || value === '-' || value === '×' || value === '÷') {
      onOperation(value);
    } else {
      // Handle number input
      onOperation(value);
    }
  };

  return (
    <div className="calculator">
      <Display value={currentValue} />
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;