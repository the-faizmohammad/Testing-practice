function stringLength(string) {
  if (typeof string !== 'string') {
    throw new Error('Input should be a string.');
  }

  const length = string.length;
  if (length === 0) {
    throw new Error('Input string should be at least 1 character long.');
  }

  if (length > 10) {
    throw new Error('Input string should not be longer than 10 characters.');
  }

  return length;
}

module.exports = stringLength;
