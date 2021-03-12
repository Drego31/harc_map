import 'src/style/light';
import 'src/style/dark';
import Cookies from 'js-cookie';

const lastSheetId = document.styleSheets.length - 1;
const lightSheet = document.styleSheets[lastSheetId - 1];
const darkSheet = document.styleSheets[lastSheetId];

export const THEMES = {
  light: 'light',
  dark: 'dark',
};

function getDefaultTheme () {
  const cookieTheme = Cookies.get('theme');
  return cookieTheme || THEMES.light;
}

export const styleManager = {
  defaultSheet: getDefaultTheme(),
  sheets: {
    light: lightSheet,
    dark: darkSheet,
  },
  init () {
    styleManager.switch(styleManager.defaultSheet);
  },
  switch (name) {
    Cookies.remove('theme');
    Cookies.set('theme', name, { expires: 7 });
    const sheets = styleManager.sheets;
    const sheetsKeys = Object.keys(sheets);
    if (sheetsKeys.includes(name)) {
      sheetsKeys.forEach(sheetName => {
        sheets[sheetName].disabled = name !== sheetName;
      });
    } else {
      throw new ErrorMessage('This styleSheet does not exist');
    }
  },
  switchTo: {
    dark () {
      styleManager.switch(THEMES.dark);
    },
    light () {
      styleManager.switch(THEMES.light);
    },
  },
};
