const wordSearch = (letters, word) => {

  if (letters.length === 0) {
    return undefined;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));

  let output = false;

  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      output = true;
      return output;
    }
  }
  // check in the vertical...transpose the array
  // check in the new array
  const numOfRows = letters.length;
  const numOfCols = letters[0].length;
  let tmpMatrix = [];
  for (let i = 0; i < numOfCols; i++) {
    tmpMatrix[i] = [];
    for (let j = 0; j < numOfRows; j++) {
      tmpMatrix[i][j] = letters[j][i];
    }
  }
  const transposedArray = tmpMatrix.map(ls => ls.join(''));
  for (const element of transposedArray) {
    if (element.includes(word)) {
      output = true;
      return output;
    }
  }
  return output;
};

module.exports = wordSearch;
