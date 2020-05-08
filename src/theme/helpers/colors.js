export function getHexColor(cssVar) {
  if (typeof cssVar !== 'string') {
    console.error(
      `getHexColor require a css var string, ${typeof cssVar} received`
    );
  }
  const cssColor = cssVar.match(/(?!.*(?=#))[a-zA-Z0-9]{6}/);

  return (cssColor && cssColor[0]) || null;
}

/**
 * Taken from https://24ways.org/2010/calculating-color-contrast/
 */
export function getContrastYIQ(backgroundHex) {
  var r = parseInt(backgroundHex.substr(0, 2), 16);
  var g = parseInt(backgroundHex.substr(2, 2), 16);
  var b = parseInt(backgroundHex.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 0 : 1;
}

/**
 * Calculate the contrast ratio of a background
 * to automatically returned the right contrasted color
 *
 * @param {string} background the css var color used as background
 * @param {array} textColors themed colors to choose over
 */
export function contrastedTextColor(background, textColors) {
  const backgroundHex = getHexColor(background);
  return textColors[getContrastYIQ(backgroundHex)];
}
