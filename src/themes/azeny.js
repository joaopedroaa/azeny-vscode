const azenyTheme = {
  name: 'Azeny',
  type: 'dark',
  palette: {
    // --- Fundos (Backgrounds) ---
    bgDarkest: '#1C1E26', // Ex: Sidebar, Titlebar, Terminal Black
    bgDark: '#21222C', // Ex: Editor, Painel
    bgHighlight: '#44475a', // Ex: Seleção, Botões, Listas
    bgMedium: '#424450', // Ex: Guias de indentação, Réguas
    bgNotification: '#2b2c39', // Ex: Centro de Notificações
    bgError: '#5a1d1d',
    bgInfo: '#063b49',
    bgWarning: '#352a05',

    // --- Textos (Foregrounds) ---
    // fgBright: '#cbd0e6',
    fgBright: '#ffffff',
    fgMuted: '#4D5980', // Ex: Inativo, Comentários
    fgIcon: '#c5c5c5',

    // --- Acentos (Accents) ---
    accent1: '#bd93f9',
    accent2: '#9951E8',
    accent3: '#75beff',
    accent4: '#61F0FF',
    accent6: '#50f2a7',
    accent7: '#89d185',
    accent9: '#FFFA65',
    accent10: '#FFFC59',
    accent12: '#ff5555',
    accent13: '#f48771',

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
    operators: '#BD93F9',
    keywords: '#9951E8',
    tags: '#9951E8',
    strings: '#E9F284',
    numbers: '#61F0FF',
    comments: '#4D5980',
    functions: '#61F0FF',
    types: '#89d185',
    classes: '#50f2a7',
    interfaces: '#89d185',
    parameters: '#FFFA65',
    attributes: '#FFFC59',
    invalid: '#FF5555',
    diffAdded: '#61F0FF',
    diffModified: '#FFFA65',
    diffDeleted: '#FF5555',
  },
};

export default azenyTheme;
