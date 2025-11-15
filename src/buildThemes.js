import allThemes from './themes/getAllThemes.js';
import createAndBuildTheme from './helpers/createAndBuildTheme.js';
Object.values(allThemes).forEach(createAndBuildTheme);
