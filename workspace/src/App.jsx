import React from 'react';
import Calculator from './components/Calculator';

function App() {
  const [currentValue, setCurrentValue] = React.useState('');
  const [operation, setOperation] = React.useState(null);

  const handleOperation = (op) => {
    setOperation(op);
    setCurrentValue(currentValue + op);
  };

  const handleClear = () => {
    setCurrentValue('');
    setOperation(null);
  };

  return (
    <div className="app">
      <Calculator 
        onOperation={handleOperation} 
        onClear={handleClear} 
        currentValue={currentValue} 
      />
    </div>
  );
}

export default App;