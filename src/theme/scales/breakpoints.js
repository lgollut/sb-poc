/**
 * For a base font size of 16px,
 * those values represent a scale of [480px, 768px, 1024px].
 *
 * Breakpoints are used to generate mobile-first (i.e. min-width) media queries.
 *
 * Example :
 * -------
 * width: ['100%', '50%', '25%']
 *
 * applies width 100% to all viewport widths,
 * width 50% above 480px,
 * width 25% above 768px
 *
 */
export const breakpoints = [30, 48, 64].map((n) => `${n}em`);
