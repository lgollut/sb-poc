import spaces from './spaces';
import sizes from './sizes';
import colors from './colors';
import typography from './typography';
import radii from './radii';
import shadows from './shadows';
import transitions from './transitions';
import * as variants from './variants';

export default {
  shadows,
  transitions,
  ...spaces,
  ...sizes,
  ...colors,
  ...typography,
  ...radii,
  ...variants,
  styles: {
    hr: {
      color: 'muted',
    },
  },
};
