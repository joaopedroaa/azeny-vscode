
import fs from 'fs';
import path from 'path';

function createFileName(name) {
  name = name.toLowerCase().replace(/\s+/g, '-');
  name = name.replace(/[^a-z0-9\-]/g, '');
  return name;
}

function createThemeConfig(themeConfig) {
  const { name, type, palette } = themeConfig;
  const theme = {
    "name": name,
    "type": type,
    "colors": {
      "activityBar.activeBackground": `${palette.accentPurple}10`,
      "activityBar.activeBorder": `${palette.accentBlue}80`,
      "activityBar.background": palette.bgDarkest,
      "activityBar.foreground": palette.fgBright,
      "activityBar.inactiveForeground": palette.fgMuted,
      "activityBarBadge.background": palette.accentBlue,
      "activityBarBadge.foreground": palette.fgBright,

      "badge.background": palette.bgHighlight,
      "badge.foreground": palette.fgBright,

      "breadcrumb.activeSelectionForeground": palette.fgBright,
      "breadcrumb.background": palette.bgDarkest,
      "breadcrumb.focusForeground": palette.fgBright,
      "breadcrumb.foreground": palette.fgMuted,
      "breadcrumbPicker.background": palette.bgDarkest,

      "button.background": palette.bgHighlight,
      "button.foreground": palette.fgBright,

      "contrastBorder": palette.bgDarkest,
      "debugToolBar.background": palette.bgDarkest,
      "diffEditor.insertedTextBackground": `${palette.accentCyan}20`,
      "diffEditor.removedTextBackground": `${palette.accentRed}50`,

      "dropdown.background": palette.bgDarkest,
      "dropdown.border": palette.bgDarkest,
      "dropdown.foreground": palette.fgBright,

      "editor.background": palette.bgDark,
      "editor.findMatchBackground": `${palette.accentYellow}80`,
      "editor.findMatchHighlightBackground": `${palette.fgBright}40`,
      "editor.findRangeHighlightBackground": `${palette.bgHighlight}75`,
      "editor.foreground": palette.fgBright,
      "editor.hoverHighlightBackground": palette.bgDarkest,
      "editor.lineHighlightBorder": palette.bgHighlight,
      "editor.rangeHighlightBackground": `${palette.accentPurple}15`,
      "editor.selectionBackground": palette.bgHighlight,
      "editor.selectionHighlightBackground": palette.bgMedium,
      "editor.snippetFinalTabstopHighlightBackground": palette.bgDark,
      "editor.snippetFinalTabstopHighlightBorder": palette.accentCyan,
      "editor.snippetTabstopHighlightBackground": palette.bgDark,
      "editor.snippetTabstopHighlightBorder": palette.fgMuted,
      "editor.wordHighlightBackground": `${palette.accentGreen}50`,
      "editor.wordHighlightStrongBackground": `${palette.accentCyan}50`,

      "editorCodeLens.foreground": palette.fgMuted,
      "editorError.foreground": palette.accentRed,
      "editorGroup.border": palette.accentPurple,
      "editorGroup.dropBackground": `${palette.bgHighlight}70`,
      "editorGroupHeader.tabsBackground": palette.bgDarkest,
      "editorGutter.addedBackground": `${palette.accentCyan}80`,
      "editorGutter.deletedBackground": `${palette.accentRed}80`,
      "editorGutter.modifiedBackground": `${palette.accentGreen}80`,
      "editorHoverWidget.background": palette.bgDark,
      "editorHoverWidget.border": palette.fgMuted,
      "editorIndentGuide.activeBackground": `${palette.fgBright}45`,
      "editorIndentGuide.background": palette.bgMedium,
      "editorLineNumber.foreground": palette.fgMuted,
      "editorLink.activeForeground": palette.accentGreen,
      "editorMarkerNavigation.background": palette.bgDarkest,
      "editorOverviewRuler.addedForeground": `${palette.accentCyan}80`,
      "editorOverviewRuler.border": palette.bgDarkest,
      "editorOverviewRuler.currentContentForeground": palette.accentCyan,
      "editorOverviewRuler.deletedForeground": `${palette.accentRed}80`,
      "editorOverviewRuler.errorForeground": `${palette.accentRed}80`,
      "editorOverviewRuler.incomingContentForeground": palette.accentPurple,
      "editorOverviewRuler.infoForeground": `${palette.accentGreen}80`,
      "editorOverviewRuler.modifiedForeground": `${palette.accentGreen}80`,
      "editorOverviewRuler.selectionHighlightForeground": palette.accentYellow,
      "editorOverviewRuler.warningForeground": `${palette.accentYellow}80`,
      "editorOverviewRuler.wordHighlightForeground": palette.accentGreen,
      "editorOverviewRuler.wordHighlightStrongForeground": palette.accentCyan,
      "editorRuler.foreground": palette.bgMedium,
      "editorSuggestWidget.background": palette.bgDarkest,
      "editorSuggestWidget.foreground": palette.fgBright,
      "editorSuggestWidget.selectedBackground": palette.bgHighlight,
      "editorWarning.foreground": palette.accentGreen,
      "editorWhitespace.foreground": palette.bgMedium,
      "editorWidget.background": palette.bgDarkest,

      "errorForeground": palette.neutralGrey,
      "extensionButton.prominentBackground": `${palette.accentCyan}90`,
      "extensionButton.prominentForeground": palette.fgBright,
      "extensionButton.prominentHoverBackground": `${palette.accentCyan}60`,
      "focusBorder": palette.fgMuted,
      "foreground": palette.fgBright,

      "gitDecoration.conflictingResourceForeground": palette.accentYellow,
      "gitDecoration.deletedResourceForeground": palette.accentRed,
      "gitDecoration.ignoredResourceForeground": palette.fgMuted,
      "gitDecoration.modifiedResourceForeground": palette.accentGreen,
      "gitDecoration.untrackedResourceForeground": palette.accentCyan,

      "input.background": palette.bgDark,
      "input.border": palette.bgDarkest,
      "input.foreground": palette.fgBright,

      "input.placeholderForeground": palette.fgMuted,
      "inputOption.activeBorder": palette.accentPurple,
      "inputValidation.errorBorder": palette.accentRed,
      "inputValidation.infoBorder": palette.accentBlue,
      "inputValidation.warningBorder": palette.accentYellow,

      "list.activeSelectionBackground": palette.bgHighlight,
      "list.activeSelectionForeground": palette.fgBright,
      "list.dropBackground": palette.bgHighlight,
      "list.errorForeground": palette.neutralGrey,
      "list.focusBackground": `${palette.bgHighlight}75`,
      "list.highlightForeground": palette.accentGreen,
      "list.hoverBackground": `${palette.bgHighlight}75`,
      "list.inactiveSelectionBackground": `${palette.bgHighlight}75`,
      "list.warningForeground": palette.accentYellow,
      "list.filterMatchBackground": `${palette.fgBright}40`,
      "list.invalidItemForeground": "#b89500",
      "list.deemphasizedForeground": `${palette.accentBlue}40`,

      "listFilterWidget.background": palette.bgDarkest,
      "listFilterWidget.noMatchesOutline": palette.accentRed,
      "listFilterWidget.outline": palette.bgMedium,
      "merge.currentHeaderBackground": `${palette.accentCyan}90`,
      "merge.incomingHeaderBackground": `${palette.accentPurple}90`,
      "panel.background": palette.bgDark,
      "panel.border": palette.accentPurple,
      "panelTitle.activeBorder": palette.accentBlue,
      "panelTitle.activeForeground": palette.fgBright,
      "panelTitle.inactiveForeground": palette.fgMuted,
      "peekView.border": palette.bgHighlight,
      "peekViewEditor.background": palette.bgDark,
      "peekViewEditor.matchHighlightBackground": `${palette.accentYellowDim}80`,
      "peekViewResult.background": palette.bgDarkest,
      "peekViewResult.fileForeground": palette.fgBright,
      "peekViewResult.lineForeground": palette.fgBright,
      "peekViewResult.matchHighlightBackground": `${palette.accentYellowDim}80`,
      "peekViewResult.selectionBackground": palette.bgHighlight,
      "peekViewResult.selectionForeground": palette.fgBright,
      "peekViewTitle.background": palette.bgDarkest,
      "peekViewTitleDescription.foreground": palette.fgMuted,
      "peekViewTitleLabel.foreground": palette.fgBright,
      "pickerGroup.border": palette.accentPurple,
      "pickerGroup.foreground": palette.accentGreen,
      "progressBar.background": palette.accentBlue,
      "selection.background": palette.accentPurple,
      "settings.checkboxBackground": palette.bgDarkest,
      "settings.checkboxBorder": palette.bgDarkest,
      "settings.checkboxForeground": palette.fgBright,
      "settings.dropdownBackground": palette.bgDarkest,
      "settings.dropdownBorder": palette.bgDarkest,
      "settings.dropdownForeground": palette.fgBright,
      "settings.headerForeground": palette.fgBright,
      "settings.modifiedItemIndicator": palette.accentYellow,
      "settings.numberInputBackground": palette.bgDarkest,
      "settings.numberInputBorder": palette.bgDarkest,
      "settings.numberInputForeground": palette.fgBright,
      "settings.textInputBackground": palette.bgDarkest,
      "settings.textInputBorder": palette.bgDarkest,
      "settings.textInputForeground": palette.fgBright,
      "sideBar.background": palette.bgDarkest,
      "sideBarSectionHeader.background": palette.bgDarkest,
      "sideBarSectionHeader.border": palette.bgDarkest,
      "sideBarTitle.foreground": palette.fgBright,
      "statusBar.background": palette.bgDarkest,
      "statusBar.debuggingBackground": palette.accentRed,
      "statusBar.debuggingForeground": palette.bgDarkest,
      "statusBar.foreground": palette.fgBright,
      "statusBar.noFolderBackground": palette.bgDarkest,
      "statusBar.noFolderForeground": palette.fgBright,
      "statusBarItem.prominentBackground": palette.accentRed,
      "statusBarItem.prominentHoverBackground": palette.accentYellow,
      "statusBarItem.remoteBackground": palette.accentPurple,
      "statusBarItem.remoteForeground": palette.fgBright,
      "tab.activeBackground": palette.bgDark,
      "tab.activeBorder": `${palette.accentBlue}80`,
      "tab.activeForeground": palette.fgBright,
      "tab.border": palette.bgDarkest,
      "tab.inactiveBackground": palette.bgDarkest,
      "tab.inactiveForeground": palette.fgMuted,
      "terminal.ansiBlack": palette.bgDarkest,
      "terminal.ansiBlue": palette.accentPurple,
      "terminal.ansiBrightBlack": palette.fgMuted,
      "terminal.ansiBrightBlue": "#d6acff", // Única - mantida
      "terminal.ansiBrightCyan": "#a4ffff", // Única - mantida
      "terminal.ansiBrightGreen": palette.accentGreenBright,
      "terminal.ansiBrightMagenta": "#ff92df", // Única - mantida
      "terminal.ansiBrightRed": "#ff6e6e", // Única - mantida
      "terminal.ansiBrightWhite": "#ffffff", // é palette.fgBright
      "terminal.ansiBrightYellow": "#ffffa5", // Única - mantida
      "terminal.ansiCyan": palette.accentGreen, // Cores trocadas no original
      "terminal.ansiGreen": palette.accentCyan, // Cores trocadas no original
      "terminal.ansiMagenta": palette.accentBlue,
      "terminal.ansiRed": palette.accentRed,
      "terminal.ansiWhite": palette.fgBright,
      "terminal.ansiYellow": palette.accentYellowDim,
      "terminal.background": palette.bgDark,
      "terminal.foreground": palette.fgBright,
      "titleBar.activeBackground": palette.bgDarkest,
      "titleBar.activeForeground": palette.fgBright,
      "titleBar.inactiveBackground": palette.bgDarkest,
      "titleBar.inactiveForeground": palette.fgMuted,
      "walkThrough.embeddedEditorBackground": palette.bgDarkest,
      "activityBar.dropBackground": `${palette.fgBright}1f`,
      "button.hoverBackground": "#52556c", // Única - mantida
      "checkbox.background": palette.bgDarkest,
      "checkbox.border": palette.bgDarkest,
      "checkbox.foreground": palette.fgBright,
      "debugExceptionWidget.background": "#420b0d", // Único - mantido
      "debugExceptionWidget.border": "#a31515", // Único - mantido
      "debugIcon.breakpointCurrentStackframeForeground": palette.accentOrange,
      "debugIcon.breakpointDisabledForeground": palette.neutralGrey2,
      "debugIcon.breakpointForeground": "#e51400", // Único - mantido
      "debugIcon.breakpointStackframeForeground": palette.accentGreenDim,
      "debugIcon.breakpointUnverifiedForeground": palette.neutralGrey2,
      "debugIcon.continueForeground": palette.accentBlueDim,
      "debugIcon.disconnectForeground": palette.accentRedDim,
      "debugIcon.pauseForeground": palette.accentBlueDim,
      "debugIcon.restartForeground": palette.accentGreenDim,
      "debugIcon.startForeground": palette.accentGreenDim,
      "debugIcon.stepBackForeground": palette.accentBlueDim,
      "debugIcon.stepIntoForeground": palette.accentBlueDim,
      "debugIcon.stepOutForeground": palette.accentBlueDim,
      "debugIcon.stepOverForeground": palette.accentBlueDim,
      "debugIcon.stopForeground": palette.accentRedDim,

       "descriptionForeground": palette.fgIcon,
      "editor.focusedStackFrameHighlightBackground": "#7abd7a4d", // Único - mantido
      "editor.inactiveSelectionBackground": `${palette.bgHighlight}80`,
      "editor.stackFrameHighlightBackground": "#ffff0033", // Único - mantido
      "editor.symbolHighlightBackground": `${palette.fgBright}40`,
      "editorActiveLineNumber.foreground": "#c6c6c6", // Quase fgIcon
      "editorBracketMatch.background": "#0064001a", // Único - mantido
      "editorBracketMatch.border": "#888888", // Único - mantido
      "editorCursor.foreground": "#aeafad", // Único - mantido
      "editorGroupHeader.noTabsBackground": palette.bgDark,
      "editorGutter.background": palette.bgDark,
      "editorGutter.commentRangeForeground": palette.fgIcon,
      "editorHint.foreground": "#eeeeeeb3", // Único - mantido
      "editorHoverWidget.foreground": palette.fgBright,
      "editorHoverWidget.statusBarBackground": "#303241", // Único - mantido
      "editorInfo.foreground": palette.accentBlueDim,
      "editorLightBulb.foreground": palette.accentOrange,
      "editorLightBulbAutoFix.foreground": palette.accentBlueDim,
      "editorLineNumber.activeForeground": "#c6c6c6", // Quase fgIcon
      "editorMarkerNavigationError.background": palette.accentRed,
      "editorMarkerNavigationInfo.background": palette.accentBlueDim,
      "editorMarkerNavigationWarning.background": palette.accentGreen,
      "editorOverviewRuler.bracketMatchForeground": "#a0a0a0", // Único - mantido
      "editorOverviewRuler.commonContentForeground": "#60606066", // Único - mantido
      "editorOverviewRuler.findMatchForeground": "#d186167e", // Único - mantido
      "editorOverviewRuler.rangeHighlightForeground": "#007acc99", // Único - mantido
      "editorPane.background": palette.bgDark,
      "editorSuggestWidget.border": palette.neutralBorder,
      "editorSuggestWidget.highlightForeground": palette.accentGreen,
      "editorUnnecessaryCode.opacity": `${palette.neutralBlack}aa`,
      "editorWidget.border": palette.neutralBorder,
      "editorWidget.foreground": palette.fgBright,
      "extensionBadge.remoteBackground": palette.accentBlue,
      "extensionBadge.remoteForeground": palette.fgBright,
      "gitDecoration.addedResourceForeground": "#81b88b", // Único - mantido
      "gitDecoration.submoduleResourceForeground": "#8db9e2", // Único - mantido
      "gitlens.gutterBackgroundColor": `${palette.fgBright}13`,
      "gitlens.gutterForegroundColor": "#bebebe", // Único - mantido
      "gitlens.gutterUncommittedForegroundColor": "#00bcf299", // Único - mantido
      "gitlens.lineHighlightBackgroundColor": "#00bcf233", // Único - mantido
      "gitlens.lineHighlightOverviewRulerColor": "#00bcf299", // Único - mantido
      "gitlens.trailingLineBackgroundColor": `${palette.neutralBlack}00`,
      "gitlens.trailingLineForegroundColor": "#99999959", // Único - mantido
      "icon.foreground": palette.fgIcon,
      "imagePreview.border": "#80808059", // Único - mantido
      "inputOption.activeBackground": `${palette.fgMuted}80`,
      "inputValidation.errorBackground": palette.bgError,
      "inputValidation.infoBackground": palette.bgInfo,
      "inputValidation.warningBackground": palette.bgWarning,

      "menu.background": palette.bgDarkest,
      "menu.foreground": palette.fgBright,
      "menu.selectionBackground": palette.bgHighlight,
      "menu.selectionForeground": palette.fgBright,
      "menu.separatorBackground": "#bbbbbb", // Único - mantido
      "menubar.selectionBackground": `${palette.fgBright}1a`,
      "menubar.selectionForeground": palette.fgBright,
      "merge.commonContentBackground": "#60606029", // Único - mantido
      "merge.commonHeaderBackground": "#60606066", // Único - mantido
      "merge.currentContentBackground": `${palette.accentCyan}3a`,
      "merge.incomingContentBackground": `${palette.accentPurple}3a`,
      "minimap.errorHighlight": "#ff1212b3", // Único - mantido
      "minimap.findMatchHighlight": "#d18616", // Único - mantido
      "minimap.selectionHighlight": "#264f78", // Único - mantido
      "minimap.warningHighlight": palette.accentGreen,
      "minimapGutter.addedBackground": "#587c0c", // Único - mantido
      "minimapGutter.deletedBackground": "#94151b", // Único - mantido
      "minimapGutter.modifiedBackground": "#0c7d9d", // Único - mantido
      "notificationCenterHeader.background": palette.bgNotification,
      "notificationLink.foreground": "#3794ff", // Único - mantido
      "notifications.background": palette.bgDarkest,
      "notifications.border": palette.bgNotification,
      "notifications.foreground": palette.fgBright,
      "notificationsErrorIcon.foreground": palette.accentRed,
      "notificationsInfoIcon.foreground": palette.accentBlueDim,
      "notificationsWarningIcon.foreground": palette.accentGreen,
      "panel.dropBackground": `${palette.fgBright}1f`,
      "peekViewEditorGutter.background": palette.bgDark,
      "problemsErrorIcon.foreground": palette.accentRed,
      "problemsInfoIcon.foreground": palette.accentBlueDim,
      "problemsWarningIcon.foreground": palette.accentGreen,
      "quickInput.background": palette.bgDarkest,
      "scrollbar.shadow": palette.neutralBlack,
      "scrollbarSlider.activeBackground": "#bfbfbf66", // Único - mantido
      "scrollbarSlider.background": "#79797966", // Único - mantido
      "scrollbarSlider.hoverBackground": "#646464b3", // Único - mantido
      "searchEditor.findMatchBackground": `${palette.fgBright}2a`,
      "settings.dropdownListBorder": palette.neutralBorder,
      "sideBar.dropBackground": `${palette.fgBright}1f`,
      "statusBarItem.activeBackground": `${palette.fgBright}2e`,
      "statusBarItem.hoverBackground": `${palette.fgBright}1f`,
      "statusBarItem.prominentForeground": palette.fgBright,
      "symbolIcon.arrayForeground": palette.fgBright,
      "symbolIcon.booleanForeground": palette.fgBright,
      "symbolIcon.classForeground": "#ee9d28", // Único - mantido
      "symbolIcon.colorForeground": palette.fgBright,
      "symbolIcon.constantForeground": palette.fgBright,
      "symbolIcon.constructorForeground": "#b180d7", // Único - mantido
      "symbolIcon.enumeratorForeground": "#ee9d28", // Único - mantido
      "symbolIcon.enumeratorMemberForeground": palette.accentBlueDim,
      "symbolIcon.eventForeground": "#ee9d28", // Único - mantido
      "symbolIcon.fieldForeground": palette.accentBlueDim,
      "symbolIcon.fileForeground": palette.fgBright,
      "symbolIcon.folderForeground": palette.fgBright,
      "symbolIcon.functionForeground": "#b180d7", // Único - mantido
      "symbolIcon.interfaceForeground": palette.accentBlueDim,
      "symbolIcon.keyForeground": palette.fgBright,
      "symbolIcon.keywordForeground": palette.fgBright,
      "symbolIcon.methodForeground": "#b180d7", // Único - mantido
      "symbolIcon.moduleForeground": palette.fgBright,
      "symbolIcon.namespaceForeground": palette.fgBright,
      "symbolIcon.nullForeground": palette.fgBright,
      "symbolIcon.numberForeground": palette.fgBright,
      "symbolIcon.objectForeground": palette.fgBright,
      "symbolIcon.operatorForeground": palette.fgBright,
      "symbolIcon.packageForeground": palette.fgBright,
      "symbolIcon.propertyForeground": palette.fgBright,
      "symbolIcon.referenceForeground": palette.fgBright,
      "symbolIcon.snippetForeground": palette.fgBright,
      "symbolIcon.stringForeground": palette.fgBright,
      "symbolIcon.structForeground": palette.fgBright,
      "symbolIcon.textForeground": palette.fgBright,
      "symbolIcon.typeParameterForeground": palette.fgBright,
      "symbolIcon.unitForeground": palette.fgBright,
      "symbolIcon.variableForeground": palette.accentBlueDim,
      "tab.activeModifiedBorder": "#3399cc", // Único - mantido
      "tab.inactiveModifiedBorder": "#3399cc80", // Único - mantido
      "tab.unfocusedActiveBackground": palette.bgDark,
      "tab.unfocusedActiveBorder": `${palette.accentBlue}40`,
      "tab.unfocusedActiveForeground": `${palette.fgBright}80`,
      "tab.unfocusedActiveModifiedBorder": "#3399cc80", // Único - mantido
      "tab.unfocusedInactiveForeground": `${palette.fgMuted}80`,
      "tab.unfocusedInactiveModifiedBorder": "#3399cc40", // Único - mantido
      "terminal.border": palette.accentPurple,
      "terminal.selectionBackground": `${palette.fgBright}40`,
      "textBlockQuote.background": "#7f7f7f1a", // Único - mantido
      "textBlockQuote.border": "#007acc80", // Único - mantido
      "textCodeBlock.background": "#0a0a0a66", // Único - mantido
      "textLink.activeForeground": "#3794ff", // Único - mantido
      "textLink.foreground": "#3794ff", // Único - mantido
      "textPreformat.foreground": "#d7ba7d", // Único - mantido
      "textSeparator.foreground": `${palette.fgBright}2e`,
      "tree.indentGuidesStroke": "#585858", // Único - mantido
      "widget.shadow": palette.neutralBlack
    },
    "tokenColors": [
      // --- Estilos de Fonte ---
      { "scope": ["emphasis"], "settings": { "fontStyle": "italic" } },
      { "scope": ["strong"], "settings": { "fontStyle": "bold" } },

      // --- Cores Base ---
      { "scope": ["header"], "settings": { "foreground": palette.accentPurple } },
      { "scope": ["source"], "settings": { "foreground": palette.editorForeground } },
      { "scope": ["meta.diff", "meta.diff.header"], "settings": { "foreground": palette.fgMuted } },
      { "scope": ["markup.inserted"], "settings": { "foreground": palette.accentCyan } },
      { "scope": ["markup.deleted"], "settings": { "foreground": palette.accentRed } },
      { "scope": ["markup.changed"], "settings": { "foreground": palette.accentYellow } },
      { "scope": ["invalid"], "settings": { "foreground": palette.accentRed, "fontStyle": "underline italic" } },
      { "scope": ["invalid.deprecated"], "settings": { "foreground": palette.editorForeground, "fontStyle": "underline italic" } },
      { "scope": ["entity.name.filename"], "settings": { "foreground": palette.accentYellowDim } },
      { "scope": ["markup.error"], "settings": { "foreground": palette.accentRed } },

      // --- Markdown/Prose ---
      { "scope": ["markup.underline"], "settings": { "fontStyle": "underline" } },
      { "scope": ["markup.bold"], "settings": { "fontStyle": "bold", "foreground": palette.accentYellow } },
      { "scope": ["markup.heading"], "settings": { "fontStyle": "bold", "foreground": palette.accentPurple } },
      { "scope": ["markup.italic"], "settings": { "foreground": palette.accentYellowDim, "fontStyle": "italic" } },
      { "scope": ["beginning.punctuation.definition.list.markdown", "beginning.punctuation.definition.quote.markdown", "punctuation.definition.link.restructuredtext"], "settings": { "foreground": palette.accentGreen } },
      { "scope": ["markup.inline.raw", "markup.raw.restructuredtext"], "settings": { "foreground": palette.accentCyan } },
      { "scope": ["markup.underline.link", "markup.underline.link.image"], "settings": { "foreground": palette.accentGreen } },
      { "scope": ["meta.link.reference.def.restructuredtext", "punctuation.definition.directive.restructuredtext", "string.other.link.description", "string.other.link.title"], "settings": { "foreground": palette.accentBlue } },
      { "scope": ["entity.name.directive.restructuredtext", "markup.quote"], "settings": { "foreground": palette.accentYellowDim, "fontStyle": "italic" } },
      { "scope": ["meta.separator.markdown"], "settings": { "foreground": palette.fgMuted } },
      { "scope": ["fenced_code.block.language", "markup.raw.inner.restructuredtext", "markup.fenced_code.block.markdown punctuation.definition.markdown"], "settings": { "foreground": palette.accentCyan } },
      { "scope": ["punctuation.definition.constant.restructuredtext"], "settings": { "foreground": palette.accentPurple } },
      { "scope": ["markup.heading.markdown punctuation.definition.string.begin", "markup.heading.markdown punctuation.definition.string.end"], "settings": { "foreground": palette.accentPurple } },
      { "scope": ["meta.paragraph.markdown punctuation.definition.string.begin", "meta.paragraph.markdown punctuation.definition.string.end"], "settings": { "foreground": palette.editorForeground } },
      { "scope": ["markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.begin", "markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.end"], "settings": { "foreground": palette.accentYellowDim } },

      // --- Classes e 'this' ---
      { "scope": ["entity.name.type.class", "entity.name.class"], "settings": { "foreground": palette.accentGreen, "fontStyle": "normal" } },
      { "scope": ["keyword.expressions-and-types.swift", "keyword.other.this", "variable.language", "variable.language punctuation.definition.variable.php", "variable.other.readwrite.instance.ruby", "variable.parameter.function.language.special"], "settings": { "foreground": palette.accentPurple, "fontStyle": "italic" } },
      { "scope": ["entity.other.inherited-class"], "settings": { "fontStyle": "italic", "foreground": palette.accentGreen } },

      // --- Comentários ---
      { "scope": ["comment", "punctuation.definition.comment", "unused.comment", "wildcard.comment"], "settings": { "foreground": palette.fgMuted } },
      { "scope": ["comment keyword.codetag.notation", "comment.block.documentation keyword", "comment.block.documentation storage.type.class"], "settings": { "foreground": palette.accentBlue } },
      { "scope": ["comment.block.documentation entity.name.type"], "settings": { "foreground": palette.accentGreen, "fontStyle": "italic" } },
      { "scope": ["comment.block.documentation entity.name.type punctuation.definition.bracket"], "settings": { "foreground": palette.accentGreen } },
      { "scope": ["comment.block.documentation variable"], "settings": { "foreground": palette.accentYellow, "fontStyle": "italic" } },

      // --- Constantes e Tags ---
      { "scope": ["constant", "variable.other.constant"], "settings": { "foreground": palette.accentPurple } },
      { "scope": ["constant.character.escape", "constant.character.string.escape", "constant.regexp"], "settings": { "foreground": palette.accentBlue } },
      { "scope": ["entity.name.tag"], "settings": { "foreground": palette.accentBlue } },
      { "scope": ["entity.other.attribute-name.parent-selector"], "settings": { "foreground": palette.accentBlue } },
      { "scope": ["entity.other.attribute-name"], "settings": { "foreground": palette.accentCyan, "fontStyle": "italic" } },

      // --- Funções e Parâmetros ---
      { "scope": ["entity.name.function", "meta.function-call.generic", "meta.function-call.object", "meta.function-call.php", "meta.function-call.static", "meta.method-call.java meta.method", "meta.method.groovy", "support.function.any-method.lua", "keyword.operator.function.infix"], "settings": { "foreground": palette.accentCyan } },
      { "scope": ["entity.name.variable.parameter", "meta.at-rule.function variable", "meta.at-rule.mixin variable", "meta.function.arguments variable.other.php", "meta.selectionset.graphql meta.arguments.graphql variable.arguments.graphql", "variable.parameter"], "settings": { "fontStyle": "italic", "foreground": palette.accentYellow } },
      { "scope": ["meta.decorator variable.other.readwrite", "meta.decorator variable.other.property"], "settings": { "foreground": palette.accentCyan, "fontStyle": "italic" } },
      { "scope": ["meta.decorator variable.other.object"], "settings": { "foreground": palette.accentCyan } },

      // --- Palavras-chave (Keywords) e Storage ---
      { "scope": ["keyword", "punctuation.definition.keyword"], "settings": { "foreground": palette.accentBlue } },
      { "scope": ["keyword.control.new", "keyword.operator.new"], "settings": { "fontStyle": "bold" } },
      { "scope": ["meta.selector"], "settings": { "foreground": palette.accentBlue } },
      { "scope": ["support"], "settings": { "fontStyle": "italic", "foreground": palette.accentGreen } },
      { "scope": ["support.function.magic", "support.variable", "variable.other.predefined"], "settings": { "fontStyle": "regular", "foreground": palette.accentPurple } },
      { "scope": ["support.function", "support.type.property-name"], "settings": { "fontStyle": "regular" } },

      // --- Separadores e Pontuação ---
      { "scope": ["constant.other.symbol.hashkey punctuation.definition.constant.ruby", "entity.other.attribute-name.placeholder punctuation", "entity.other.attribute-name.pseudo-class punctuation", "entity.other.attribute-name.pseudo-element punctuation", "meta.group.double.toml", "meta.group.toml", "meta.object-binding-pattern-variable punctuation.destructuring", "punctuation.colon.graphql", "punctuation.definition.block.scalar.folded.yaml", "punctuation.definition.block.scalar.literal.yaml", "punctuation.definition.block.sequence.item.yaml", "punctuation.definition.entity.other.inherited-class", "punctuation.function.swift", "punctuation.separator.dictionary.key-value", "punctuation.separator.hash", "punctuation.separator.inheritance", "punctuation.separator.key-value", "punctuation.separator.key-value.mapping.yaml", "punctuation.separator.namespace", "punctuation.separator.pointer-access", "punctuation.separator.slice", "string.unquoted.heredoc punctuation.definition.string", "support.other.chomping-indicator.yaml", "punctuation.separator.annotation"], "settings": { "foreground": palette.accentBlue } },
      { "scope": ["keyword.operator.other.powershell", "keyword.other.statement-separator.powershell", "meta.brace.round", "meta.function-call punctuation", "punctuation.definition.arguments.begin", "punctuation.definition.arguments.end", "punctuation.definition.entity.begin", "punctuation.definition.entity.end", "punctuation.definition.tag.cs", "punctuation.definition.type.begin", "punctuation.definition.type.end", "punctuation.section.scope.begin", "punctuation.section.scope.end", "storage.type.generic.java", "string.template meta.brace", "string.template punctuation.accessor"], "settings": { "foreground": palette.editorForeground } },

      // --- Interpolação ---
      { "scope": ["meta.string-contents.quoted.double punctuation.definition.variable", "punctuation.definition.interpolation.begin", "punctuation.definition.interpolation.end", "punctuation.definition.template-expression.begin", "punctuation.definition.template-expression.end", "punctuation.section.embedded.begin", "punctuation.section.embedded.coffee", "punctuation.section.embedded.end", "punctuation.section.embedded.end source.php", "punctuation.section.embedded.end source.ruby", "punctuation.definition.variable.makefile"], "settings": { "foreground": palette.accentBlue } },

      // --- JSON/YAML/TOML Keys ---
      { "scope": ["entity.name.function.target.makefile", "entity.name.section.toml", "entity.name.tag.yaml", "variable.other.key.toml"], "settings": { "foreground": palette.accentGreen } },
      { "scope": ["constant.other.date", "constant.other.timestamp"], "settings": { "foreground": palette.accentYellow } },
      { "scope": ["variable.other.alias.yaml"], "settings": { "fontStyle": "italic underline", "foreground": palette.accentCyan } },

      // --- Storage e Tipos ---
      { "scope": ["storage", "meta.implementation storage.type.objc", "meta.interface-or-protocol storage.type.objc", "source.groovy storage.type.def"], "settings": { "fontStyle": "regular", "foreground": palette.accentBlue } },
      { "scope": ["entity.name.type", "keyword.primitive-datatypes.swift", "keyword.type.cs", "meta.protocol-list.objc", "meta.return-type.objc", "source.go storage.type", "source.groovy storage.type", "source.java storage.type", "source.powershell entity.other.attribute-name", "storage.class.std.rust", "storage.type.attribute.swift", "storage.type.c", "storage.type.core.rust", "storage.type.cs", "storage.type.groovy", "storage.type.objc", "storage.type.php", "storage.type.haskell", "storage.type.ocaml"], "settings": { "fontStyle": "italic", "foreground": palette.accentGreen } },
      { "scope": ["entity.name.type.type-parameter", "meta.indexer.mappedtype.declaration entity.name.type", "meta.type.parameters entity.name.type"], "settings": { "foreground": palette.accentYellow } },
      { "scope": ["storage.modifier"], "settings": { "foreground": palette.accentBlue } },

      // --- RegExp ---
      { "scope": ["string.regexp", "constant.other.character-class.set.regexp", "constant.character.escape.backslash.regexp"], "settings": { "foreground": palette.accentYellowDim } },
      { "scope": ["punctuation.definition.group.capture.regexp"], "settings": { "foreground": palette.accentBlue } },
      { "scope": ["string.regexp punctuation.definition.string.begin", "string.regexp punctuation.definition.string.end"], "settings": { "foreground": palette.accentRed } },
      { "scope": ["punctuation.definition.character-class.regexp"], "settings": { "foreground": palette.accentGreen } },
      { "scope": ["punctuation.definition.group.regexp"], "settings": { "foreground": palette.accentYellow } },
      { "scope": ["punctuation.definition.group.assertion.regexp", "keyword.operator.negation.regexp"], "settings": { "foreground": palette.accentRed } },
      { "scope": ["meta.assertion.look-ahead.regexp"], "settings": { "foreground": palette.accentCyan } },

      // --- Strings ---
      { "scope": ["string"], "settings": { "foreground": palette.accentYellowDim } },
      { "scope": ["punctuation.definition.string.begin", "punctuation.definition.string.end"], "settings": { "foreground": palette.accentYellowString } },
      { "scope": ["punctuation.support.type.property-name.begin", "punctuation.support.type.property-name.end"], "settings": { "foreground": palette.accentCyanProp } },
      { "scope": ["string.quoted.docstring.multi", "string.quoted.docstring.multi.python punctuation.definition.string.begin", "string.quoted.docstring.multi.python punctuation.definition.string.end", "string.quoted.docstring.multi.python constant.character.escape"], "settings": { "foreground": palette.fgMuted } },

      // --- Variáveis e Propriedades ---
      { "scope": ["variable", "constant.other.key.perl", "support.variable.property", "variable.other.constant.js", "variable.other.constant.ts", "variable.other.constant.tsx"], "settings": { "foreground": palette.editorForeground } },
      { "scope": ["meta.import variable.other.readwrite", "meta.object-binding-pattern-variable variable.object.property", "meta.variable.assignment.destructured.object.coffee variable"], "settings": { "fontStyle": "italic", "foreground": palette.accentYellow } },
      { "scope": ["meta.import variable.other.readwrite.alias", "meta.export variable.other.readwrite.alias", "meta.variable.assignment.destructured.object.coffee variable variable"], "settings": { "fontStyle": "normal", "foreground": palette.editorForeground } },

      // --- GraphQL ---
      { "scope": ["meta.selectionset.graphql variable"], "settings": { "foreground": palette.accentYellowDim } },
      { "scope": ["meta.selectionset.graphql meta.arguments variable"], "settings": { "foreground": palette.editorForeground } },
      { "scope": ["entity.name.fragment.graphql", "variable.fragment.graphql"], "settings": { "foreground": palette.accentGreen } },

      // --- Edge Cases (Resets) ---
      { "scope": ["constant.other.symbol.hashkey.ruby", "keyword.operator.dereference.java", "keyword.operator.navigation.groovy", "meta.scope.for-loop.shell punctuation.definition.string.begin", "meta.scope.for-loop.shell punctuation.definition.string.end", "meta.scope.for-loop.shell string", "storage.modifier.import", "punctuation.section.embedded.begin.tsx", "punctuation.section.embedded.end.tsx", "punctuation.section.embedded.begin.jsx", "punctuation.section.embedded.end.jsx", "punctuation.separator.list.comma.css", "constant.language.empty-list.haskell"], "settings": { "foreground": palette.editorForeground } },
      { "scope": ["source.shell variable.other"], "settings": { "foreground": palette.accentPurple } },
      { "scope": ["support.constant"], "settings": { "fontStyle": "normal", "foreground": palette.accentPurple } },
      { "scope": ["meta.scope.prerequisites.makefile"], "settings": { "foreground": palette.accentYellowDim } },
      { "scope": ["meta.attribute-selector.scss"], "settings": { "foreground": palette.accentYellowDim } },
      { "scope": ["punctuation.definition.attribute-selector.end.bracket.square.scss", "punctuation.definition.attribute-selector.begin.bracket.square.scss"], "settings": { "foreground": palette.editorForeground } },
      { "scope": ["meta.preprocessor.haskell"], "settings": { "foreground": palette.fgMuted } },

      // --- Tokens de Log (Info, Warn, etc.) ---
      { "scope": "token.info-token", "settings": { "foreground": "#6796e6" } },
      { "scope": "token.warn-token", "settings": { "foreground": "#cd9731" } },
      { "scope": "token.error-token", "settings": { "foreground": "#f44747" } },
      { "scope": "token.debug-token", "settings": { "foreground": "#b267e6" } }
    ]
  };
  return theme
}


function writeThemeFile(themeConfig) {
  const { name } = themeConfig;
  try {

  const fileName = createFileName(name);
  const outputDir = './themes';
  const outputPath = path.resolve(outputDir, `${fileName}.json`);

  // Cria o diretório 'themes' se ele não existir
  if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
  }

  // Escreve o arquivo JSON final com formatação (espaçamento de 2)
  fs.writeFileSync(outputPath, JSON.stringify(themeConfig, null, 2));

  console.log(`✅ Tema gerado com sucesso em: ${outputPath}`);

} catch (err) {
  console.error("❌ Erro ao gerar o tema:", err);
}
}

function buildTheme(configTheme) {
  writeThemeFile(createThemeConfig(configTheme))
}

// ----------------------------------

const azenyTheme = {
  name: "Azeny",
  type: "dark",
  palette: {
  // --- Fundos (Backgrounds) ---
  bgDarkest: "#1C1E26",    // Ex: Sidebar, Titlebar, Terminal Black
  bgDark: "#21222C",       // Ex: Editor, Painel
  bgHighlight: "#44475a",  // Ex: Seleção, Botões, Listas
  bgMedium: "#424450",     // Ex: Guias de indentação, Réguas
  bgNotification: "#2b2c39", // Ex: Centro de Notificações
  bgError: "#5a1d1d",
  bgInfo: "#063b49",
  bgWarning: "#352a05",

  // --- Textos (Foregrounds) ---
  fgBright: "#ffffff",
  fgMuted: "#4D5980",    // Ex: Inativo, Comentários
  fgIcon: "#c5c5c5",

  // --- Acentos (Accents) ---
  accentPurple: "#bd93f9",
  accentBlue: "#9951E8",
  accentBlueDim: "#75beff",
  accentCyan: "#61F0FF",
  accentCyanProp: "#8BE9FE",
  accentGreen: "#66ea90",
  accentGreenDim: "#89d185",
  accentGreenBright: "#69ff94",
  accentYellow: "#ead266",
  accentYellowDim: "#FFFC59",
  accentYellowString: "#E9F284",
  accentRed: "#ff5555",
  accentRedDim: "#f48771",
  accentOrange: "#ffcc00", // debug icons

  // --- Neutros e Bordas ---
  neutralBlack: "#000000",
  neutralBorder: "#454545",  // editorWidget.border
  neutralGrey: "#5a607d",    // errorForeground
  neutralGrey2: "#848484",   // debug icons
}
}

const okanoTheme = {
  name: "Azeny Okano",
  type: "dark",
  palette: {
  // --- Fundos (Backgrounds) ---
  bgDarkest: "#1a1d2c",    // Ex: Sidebar, Titlebar, Terminal Black
  bgDark: "#212537",       // Ex: Editor, Painel
  bgHighlight: "#44475a",  // Ex: Seleção, Botões, Listas
  bgMedium: "#424450",     // Ex: Guias de indentação, Réguas
  bgNotification: "#2b2c39", // Ex: Centro de Notificações
  bgError: "#1a1d2c",
  bgInfo: "#1a1d2c",
  bgWarning: "#352a05",

  // --- Textos (Foregrounds) ---
  fgBright: "#ffffff",
  fgMuted: "#4D5980",    // Ex: Inativo, Comentários
  fgIcon: "#c5c5c5",

  // --- Acentos (Accents) ---
  accentPurple: "#bd93f9",
  accentBlue: "#667eea",
  accentBlueDim: "#75beff",
  accentCyan: "#61F0FF",
  accentCyanProp: "#8BE9FE",
  accentGreen: "#66ea90",
  accentGreenDim: "#89d185",
  accentGreenBright: "#69ff94",
  accentYellow: "#ead266",
  accentYellowDim: "#FFFC59",
  accentYellowString: "#E9F284",
  accentRed: "#ff5555",
  accentRedDim: "#f48771",
  accentOrange: "#ffcc00", // debug icons

  // --- Neutros e Bordas ---
  neutralBlack: "#000000",
  neutralBorder: "#454545",  // editorWidget.border
  neutralGrey: "#5a607d",    // errorForeground
  neutralGrey2: "#848484",   // debug icons
}
}

const cutiTheme = {
  name: "Azeny Cutimaru",
  type: "dark",
  palette: {


  // --- Fundos (Backgrounds) ---
  bgDarkest: "#1a1d2c",    // Ex: Sidebar, Titlebar, Terminal Black
  bgDark: "#212537",       // Ex: Editor, Painel
  bgHighlight: "#44475a",  // Ex: Seleção, Botões, Listas
  bgMedium: "#424450",     // Ex: Guias de indentação, Réguas
  bgNotification: "#2b2c39", // Ex: Centro de Notificações
  bgError: "#1a1d2c",
  bgInfo: "#1a1d2c",
  bgWarning: "#352a05",

  // --- Textos (Foregrounds) ---
  fgBright: "#a9b1d6",
  fgMuted: "#4D5980",    // Ex: Inativo, Comentários
  fgIcon: "#c5c5c5",

  // --- Acentos (Accents) ---
  accentPurple: "#bd93f9",
  accentBlue: "#667eea",
  accentBlueDim: "#75beff",
  accentCyan: "#61F0FF",
  accentCyanProp: "#8BE9FE",
  accentGreen: "#66ea90",
  accentGreenDim: "#89d185",
  accentGreenBright: "#69ff94",
  accentYellow: "#ead266",
  accentYellowDim: "#FFFC59",
  accentYellowString: "#E9F284",
  accentRed: "#ff5555",
  accentRedDim: "#f48771",
  accentOrange: "#ffcc00", // debug icons

  // --- Neutros e Bordas ---
  neutralBlack: "#000000",
  neutralBorder: "#454545",  // editorWidget.border
  neutralGrey: "#5a607d",    // errorForeground
  neutralGrey2: "#848484",   // debug icons

   // --- Editor Specific ---
  editorForeground: "#f8f8f2",

}
}

buildTheme(azenyTheme)
buildTheme(okanoTheme)
buildTheme(cutiTheme)
