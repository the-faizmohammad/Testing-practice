const stringLength = require('./stringLength');

describe('stringLength Function Test', () => {
  test('returns correct length for a valid string', () => {
    const inputString = 'Hello, World!';
    const result = stringLength(inputString);
    expect(result).toBe(13);
  });
});
