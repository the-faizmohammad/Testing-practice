function reverseString(string) {
  if (typeof string !== 'string') {
    throw new Error('Input should be a string.');
  }
  return string.split('').reverse().join('');
}

module.exports = reverseString;

