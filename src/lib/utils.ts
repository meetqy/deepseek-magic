/**
 * Get the visual length of a string, correctly counting:
 * - CJK characters (Chinese, Japanese, Korean)
 * - Emojis
 * - Special Unicode characters
 * - ASCII characters
 *
 * @param str The input string to measure
 * @returns The visual character length
 */
export function getStringLength(str: string): number {
  if (!str) return 0;

  // Use Array.from to correctly split Unicode characters and emojis
  const chars = Array.from(str);

  return chars.reduce((acc, char) => {
    // Check for CJK characters
    if (/[\u4e00-\u9fff]/.test(char)) {
      return acc + 2; // CJK characters typically have width of 2
    }

    // Check for full-width characters
    if (/[\uff00-\uffff]/.test(char)) {
      return acc + 2;
    }

    // Check for emojis (including variations and skin tones)
    if (/\p{Emoji_Presentation}/u.test(char)) {
      return acc + 2;
    }

    // Default ASCII and other characters
    return acc + 1;
  }, 0);
}

/**
 * Truncate string to specified length, considering character widths
 *
 * @param str The input string to truncate
 * @param maxLength Maximum length allowed
 * @param suffix Optional suffix to append (default: '...')
 * @returns Truncated string
 */
export function truncateString(
  str: string,
  maxLength: number,
  suffix = "...",
): string {
  if (!str) return "";

  const chars = Array.from(str);
  let currentLength = 0;
  let result = "";

  for (const char of chars) {
    const charLength = getStringLength(char);
    if (currentLength + charLength > maxLength) {
      return result + suffix;
    }
    result += char;
    currentLength += charLength;
  }

  return result;
}
