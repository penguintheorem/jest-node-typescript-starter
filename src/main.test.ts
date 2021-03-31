import { isPalindrome } from './main';

test('should return `true` for an empty string', () => {
  expect(isPalindrome('')).toBe(true);
});

test('should return `true` for a string with a single character', () => {
  expect(isPalindrome('a')).toBe(true);
});

test('should return `true` for a palindrome string (odd)', () => {
  expect(isPalindrome('abcdedcba')).toBe(true);
});

test('should return `true` for a palindrome string (even)', () => {
  expect(isPalindrome('abcdeedcba')).toBe(true);
});

test('should return `true` for a non-palindrome string', () => {
  expect(isPalindrome('abtdeedcba')).toBe(false);
});
