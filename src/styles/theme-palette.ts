import ThemeColors from "./theme-colors";

const ThemePalette = {
  common: {
    white: ThemeColors.gray50,
    black: ThemeColors.gray800,
  },
  primary: {
    lighter: ThemeColors.gray50,
    light: ThemeColors.blue2,
    main: ThemeColors.blue1,
    dark: ThemeColors.gray800,
    contrastText: ThemeColors.gray100,
  },
  secondary: {
    lighter: ThemeColors.gray50,
    light: ThemeColors.gray100,
    main: ThemeColors.gray800,
    dark: ThemeColors.gray200,
    contrastText: ThemeColors.gray400,
  },
  info: {
    light: ThemeColors.gray50,
    main: ThemeColors.gray50,
    dark: ThemeColors.gray50,
    contrastText: ThemeColors.gray800,
  },
  success: {
    lighter: ThemeColors.complete,
    light: ThemeColors.complete,
    main: ThemeColors.complete,
    dark: ThemeColors.complete,
    contrastText: ThemeColors.gray50,
  },
  warning: {
    light: ThemeColors.warning,
    main: ThemeColors.warning,
    dark: ThemeColors.warning,
    contrastText: ThemeColors.gray50,
  },
  error: {
    light: ThemeColors.alert,
    main: ThemeColors.alert,
    dark: ThemeColors.alert,
    contrastText: ThemeColors.gray50,
  },
};

export default ThemePalette;
