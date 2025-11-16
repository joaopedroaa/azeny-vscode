import fs from 'fs';
import path from 'path';
import formatFileName from './formatFileName.js';

function writeThemeFile(themeConfig) {
  const { name } = themeConfig;
  try {
    const fileName = formatFileName(name);
    const outputDir = './themes';
    const outputPath = path.resolve(outputDir, `${fileName}.json`);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    // Escreve o arquivo JSON final com formatação (espaçamento de 2)
    fs.writeFileSync(outputPath, JSON.stringify(themeConfig, null, 2));

    console.log(`✅ ${name} - ${outputPath}`);
  } catch (err) {
    console.error('❌ ${name} ', err);
  }
}

export default writeThemeFile;
