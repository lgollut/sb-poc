import { durations, eases } from '../scales';

/**
 * Heavily inspired from https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/transitions.js
 */

const formatMs = (ms) => `${Math.round(ms)}ms`;

export const createTransition = (
  props = ['all'],
  { duration = durations.standard, easing = eases.easeInOut, delay = 0 } = {}
) =>
  (Array.isArray(props) ? props : [props])
    .map(
      (prop) =>
        `${prop} ${
          typeof duration === 'string' ? duration : formatMs(duration)
        } ${easing} ${typeof delay === 'string' ? delay : formatMs(delay)}`
    )
    .join(',');
