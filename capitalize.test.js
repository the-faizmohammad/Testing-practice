const capitalize = require('./capitalize');

describe('capitalize Function Test', () => {
  test('capitalizes the first character of a string', () => {
    const inputString = 'hello, world!';
    const result = capitalize(inputString);
    expect(result).toBe('Hello, world!');
  });

  test('capitalizes the first character of an uppercase string', () => {
    const inputString = 'WELCOME TO JEST';
    const result = capitalize(inputString);
    expect(result).toBe('Welcome to jest');
  });

  test('capitalizes the first character of a single-character string', () => {
    const inputString = 'a';
    const result = capitalize(inputString);
    expect(result).toBe('A');
  });

  test('throws an error for a non-string input', () => {
    const inputNumber = 42;
    expect(() => capitalize(inputNumber)).toThrow('Input should be a string.');
  });
});
