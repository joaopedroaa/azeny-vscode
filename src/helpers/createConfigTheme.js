import baseColors from '../themes/baseColors.js';

function createConfigTheme(configTheme) {
  const { name, type, palette } = configTheme;
  const { colors, tokenColors } = baseColors(palette);
  const theme = {
    name: name,
    type: type,
    colors,
    tokenColors,
  };
  return theme;
}

export default createConfigTheme;
