/**
 * implementation copied from https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/shadows.js
 */
const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;

function createShadow(...px) {
  return [
    `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`,
    `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`,
    `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`,
  ].join(',');
}

// Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss
const shadows = {
  '0': 'none',
  '1': createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
  '2': createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
  '3': createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
  '4': createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
  '6': createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
  '8': createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
  '12': createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
  '16': createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
  '24': createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
};

export default shadows;
