const reverseString = require('./reverseString');

describe('reverseString Function Test', () => {
  test('reverses a valid string', () => {
    const inputString = 'Hello, World!';
    const result = reverseString(inputString);
    expect(result).toBe('!dlroW ,olleH');
  });

  test('throws an error for a non-string input', () => {
    const inputNumber = 42;
    expect(() => reverseString(inputNumber)).toThrow('Input should be a string.');
  });
});

