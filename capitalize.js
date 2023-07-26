function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error('Input should be a string.');
  }

  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

module.exports = capitalize;
