import * as scales from './scales';
import * as variants from './variants';
import * as styles from './styles';
import * as helpers from './helpers';

const options = {
  /**
   * The key used for the top-level color palette in theme.colors
   */
  initialColorModeName: 'default',
  /**
   * Adds styles defined in theme.styles.root to the <body> element
   * along with color and background-color
   */
  useBodyStyles: true,
  /**
   * Adds a global box-sizing: border-box style
   */
  useBorderBox: true,
  /**
   * Initializes the color mode based on the prefers-color-scheme
   * media query
   */
  useColorSchemeMediaQuery: true,
  /**
   * Enables CSS custom properties to help mitigate
   * a flash of unstyled content during rehydration
   */
  useCustomProperties: true,
};

export const theme = {
  /**
   * Theme options
   * https://theme-ui.com/theming#configuration-flags
   */
  ...options,
  /**
   * Theme scales defined common values used throughout the application
   * https://theme-ui.com/theme-spec#theme-scales
   */
  ...scales,
  /**
   * Use variants to define custom groups of styles.
   * These are commonly used for typographic styles, buttons,
   * and themeable layout components
   * https://theme-ui.com/theme-spec#variants
   */
  ...variants,
  /**
   * The styles object helps avoid the need to use global CSS.
   * https://theme-ui.com/theme-spec#styles
   */
  styles,
  /**
   * The custom helpers object contains a set of useful functions
   * for styling purpose
   */
  helpers,
};
