const stringLength = require('./stringLength');

describe('stringLength Function Test', () => {
  // ...existing test cases...

  test('throws an error for an empty string', () => {
    const inputString = '';
    expect(() => stringLength(inputString)).toThrow('Input string should be at least 1 character long.');
  });

  test('throws an error for a string longer than 10 characters', () => {
    const inputString = 'Hello, World!';
    expect(() => stringLength(inputString)).toThrow('Input string should not be longer than 10 characters.');
  });
});
