import React from 'react';
import Button from './Button';

const Keypad = ({ onButtonClick }) => {
  const handleButtonPress = (value) => {
    onButtonClick(value);
  };

  return (
    <div className="keypad">
      <Button label="C" onClick={() => handleButtonPress('C')} />
      <Button label="+" onClick={() => handleButtonPress('+')} />
      <Button label="-" onClick={() => handleButtonPress('-')} />
      <Button label="×" onClick={() => handleButtonPress('×')} />
      <Button label="÷" onClick={() => handleButtonPress('÷')} />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
        <Button key={num} label={num} onClick={() => handleButtonPress(num)} />
      ))}
    </div>
  );
};

export default Keypad;