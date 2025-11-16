const azenyOkanoTheme = {
  name: 'Azeny Okano',
  type: 'dark',
  palette: {
    // --- Fundos (Backgrounds) ---
    bgDarkest: '#1a1d2c', // Ex: Sidebar, Titlebar, Terminal Black
    bgDark: '#212537', // Ex: Editor, Painel
    bgHighlight: '#44475a', // Ex: Seleção, Botões, Listas
    bgMedium: '#424450', // Ex: Guias de indentação, Réguas
    bgNotification: '#2b2c39', // Ex: Centro de Notificações
    bgError: '#5a1d1d',
    bgInfo: '#063b49',
    bgWarning: '#352a05',

    // --- Textos (Foregrounds) ---
    // fgBright: '#b1b8da',
    fgBright: '#ffffff',
    fgMuted: '#4D5980', // Ex: Inativo, Comentários
    fgIcon: '#c5c5c5',

    // --- Acentos (Accents) ---
    accent1: '#bd93f9',
    accent2: '#667eea',
    accent3: '#75beff',
    accent4: '#61F0FF',
    accent6: '#66ea90',
    accent7: '#89d185',
    accent9: '#ead266',
    accent10: '#FFFC59',
    accent12: '#ff5555',

    // --- Neutros e Bordas ---
    neutralBlack: '#000000',
    neutralBorder: '#454545', // editorWidget.border
    neutralGrey: '#5a607d', // errorForeground
    neutralGrey2: '#848484', // debug icons
  },

  tokenColors: {
    // --- Syntax Highlighting ---
    variables: '#ffffff',
    foreground: '#ffffff',
    operators: '#bd93f9',
    keywords: '#667eea',
    tags: '#667eea',
    strings: '#FFFC59',
    numbers: '#61F0FF',
    comments: '#4D5980',
    functions: '#61F0FF',
    types: '#66ea90',
    classes: '#66ea90',
    interfaces: '#89d185',
    parameters: '#ead266',
    attributes: '#61F0FF',
    invalid: '#ff5555',
    diffAdded: '#61F0FF',
    diffModified: '#ead266',
    diffDeleted: '#ff5555',
  },
};

export default azenyOkanoTheme;
