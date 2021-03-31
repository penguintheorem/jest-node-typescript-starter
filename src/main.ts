// write here your function
// i'll use the "valid palindrome" problem solution as example (https://dev.to/urfan/leetcode-valid-palindrome-with-javascript-38be)
export function isPalindrome(string: string): boolean {
  if (string.length <= 1) {
    return true;
  }

  let first = 0;
  let last = string.length - 1;

  while (first <= last) {
    if (string[first++] !== string[last--]) {
      return false;
    }
  }

  return true;
}
