/**
 * The size of the transition area define the duration of the function
 *
 * Small : Elements with small transition areas, such as icons and selection controls.
 * Medium : Elements with larger transition areas, such as bottom sheets and expanding chips
 * Large : Animated elements that traverse a large portion of the screen
 */
export const durations = {
  /**
   * Small
   */
  shorter: 100,
  /**
   * Medium out
   */
  short: 200,
  /**
   * Medium in || Large out
   */
  standard: 250,
  /**
   * Large in
   */
  long: 300,
};
