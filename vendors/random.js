const allCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const regexForUnreadableChars = /[O0Il]/g;
const readableCharacters = allCharacters.replace(regexForUnreadableChars, '');

/**
 * @description Generate random string based on given length and own
 * set of characters if you want
 * @param length {number}
 * @param ownCharacters {string}
 * @return {string}
 */
function generateRandomString (length, ownCharacters = undefined) {
  let result = '';
  const characters = ownCharacters || allCharacters;
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
/**
 * @description Generate random easy to read string based on given length
 * @param length {number}
 * @return {string}
 */
function generateRandomStringWithoutSimilarChars (length) {
  return generateRandomString(length, readableCharacters);
}
/**
 * @description Check if string is easy to read
 * @param text {string}
 * @return {boolean}
 */
function checkIfStringIsReadable (text) {
  return text.match(regexForUnreadableChars) === null;
}

module.exports = {
  generateRandomString,
  generateRandomStringWithoutSimilarChars,
  checkIfStringIsReadable,
};
