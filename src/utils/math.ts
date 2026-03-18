export const calculate = (a: number, b: number, operator: string): number | string => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) return 'Error';
      return a / b;
    default:
      return 0;
  }
};
