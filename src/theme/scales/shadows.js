/**
 * Heavily inspired from https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/shadows.js
 */
function createShadow(umbra, penumbra, ambient) {
  return [
    `${umbra.map((n) => `${n}px`).join(' ')} rgba(0,0,0,0.2)`,
    `${penumbra.map((n) => `${n}px`).join(' ')} rgba(0,0,0,0.14)`,
    `${ambient.map((n) => `${n}px`).join(' ')} rgba(0,0,0,0.12)`,
  ].join(',');
}

export const shadows = [
  'none',
  createShadow([0, 2, 1, -1], [0, 1, 1, 0], [0, 1, 3, 0]),
  createShadow([0, 3, 1, -2], [0, 2, 2, 0], [0, 1, 5, 0]),
  createShadow([0, 3, 3, -2], [0, 3, 4, 0], [0, 1, 8, 0]),
  createShadow([0, 2, 4, -1], [0, 4, 5, 0], [0, 1, 10, 0]),
  createShadow([0, 3, 5, -1], [0, 6, 10, 0], [0, 1, 18, 0]),
  createShadow([0, 5, 5, -3], [0, 8, 10, 1], [0, 3, 14, 2]),
  createShadow([0, 7, 8, -4], [0, 12, 17, 2], [0, 5, 22, 4]),
  createShadow([0, 8, 10, -5], [0, 16, 24, 2], [0, 6, 30, 5]),
  createShadow([0, 11, 15, -7], [0, 24, 38, 3], [0, 9, 46, 8]),
];
