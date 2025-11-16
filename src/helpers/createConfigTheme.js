import baseColors from '../themes/baseColors.js';

function createConfigTheme(configTheme) {
  const { name, type } = configTheme;
  const { colors, tokenColors } = baseColors(configTheme);
  const theme = {
    name: name,
    type: type,
    colors,
    tokenColors,
  };
  return theme;
}

export default createConfigTheme;
