const Calculator = require('./calculator');

describe('Calculator Test', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  // Add method tests
  describe('Add method', () => {
    test('adds two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('adds two negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    test('adds a positive and a negative number', () => {
      expect(calculator.add(5, -2)).toBe(3);
    });
  });

  // Subtract method tests
  describe('Subtract method', () => {
    test('subtracts two positive numbers', () => {
      expect(calculator.subtract(5, 2)).toBe(3);
    });

    test('subtracts two negative numbers', () => {
      expect(calculator.subtract(-5, -2)).toBe(-3);
    });

    test('subtracts a positive and a negative number', () => {
      expect(calculator.subtract(5, -2)).toBe(7);
    });
  });

  // Divide method tests
  describe('Divide method', () => {
    test('divides two positive numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('divides two negative numbers', () => {
      expect(calculator.divide(-10, -2)).toBe(5);
    });

    test('divides a positive number by a negative number', () => {
      expect(calculator.divide(10, -2)).toBe(-5);
    });

    test('throws an error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero.');
    });
  });

  // Multiply method tests
  describe('Multiply method', () => {
    test('multiplies two positive numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('multiplies two negative numbers', () => {
      expect(calculator.multiply(-2, -3)).toBe(6);
    });

    test('multiplies a positive and a negative number', () => {
      expect(calculator.multiply(5, -2)).toBe(-10);
    });
  });
});

