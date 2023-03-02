export function checkIfURL(str) {
  // Create a regular expression to match the beginning of a URL
  const urlRegExp =
    /^(?:(?:(?:https?|ftp):)?\/\/)?(?:www\.)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/i;

  // Extract the first 20 characters from the input string
  const first20Chars = str.substring(0, 20);

  // Test the first 20 characters against the regular expression
  return urlRegExp.test(first20Chars);
}
