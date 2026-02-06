/**
 * Capitalizes the first letter of a string
 * @param str - The string to capitalize
 * @returns The capitalized string
 */
export function capitalize(str: string): string {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Reverses a string
 * @param str - The string to reverse
 * @returns The reversed string
 */
export function reverse(str: string): string {
  return str.split('').reverse().join('');
}

/**
 * Checks if a string is a palindrome (case-insensitive, ignoring spaces)
 * @param str - The string to check
 * @returns True if the string is a palindrome, false otherwise
 */
export function isPalindrome(str: string): boolean {
  // Remove spaces and convert to lowercase for comparison
  const cleaned = str.replace(/\s+/g, '').toLowerCase();
  return cleaned === reverse(cleaned);
}