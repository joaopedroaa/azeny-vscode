import writeThemeFile from './writeThemeFile.js';
import createConfigTheme from './createConfigTheme.js';

function createAndBuildTheme(configTheme) {
  writeThemeFile(createConfigTheme(configTheme));
}

export default createAndBuildTheme;
