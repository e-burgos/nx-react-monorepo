/**
 * Generates a navigation title for a backward navigation action.
 *
 * @param {string} customViewTitle - Optional. The title of the destination view.
 * If not provided, the function will default to 'previous page'.
 *
 * @returns {string} - A string formatted as 'Back to [customViewTitle]'.
 * If no `customViewTitle` is provided, the function will return 'Back to previous page'.
 *
 * @example
 *
 * // Returns 'Back to Settings'
 * backwardNavTitle('Settings');
 *
 * // Returns 'Back to previous page'
 * backwardNavTitle();
 */
export default function backwardNavTitle(customViewTitle?: string): string {
  const titlePrefix = 'Back to';
  return ` ${titlePrefix} ${customViewTitle || 'previous page'}`;
}
