import { useThemeUI, merge } from '@theme-ui/core';
import { get } from '@theme-ui/css';

function createParser(styles, root = {}) {
  function parser(rules) {
    if (Array.isArray(rules)) {
      return rules.reduce((acc, variant) => merge(acc, parser(variant)), {});
    }

    // eslint-disable-next-line valid-typeof
    if (typeof rules === 'object' && typeof rules !== null) {
      return parser(
        Object.entries(rules).reduce(
          (acc, [key, value]) => (value ? [...acc, key] : acc),
          []
        )
      );
    }

    if (typeof rules === 'string') {
      return get(styles, rules, {});
    }
  }

  return (rules) => merge(root, parser(rules));
}

export default function useVariants(themeKey) {
  const { theme } = useThemeUI();
  const styles = get(theme, themeKey, theme);
  const rulesParser = createParser(styles, styles['']);

  return (rules) => rulesParser(rules);
}
