import { TypographyOptions } from '@mui/material/styles/createTypography';
import { createTheme, Theme } from '@mui/material';
import ThemeColors from "./theme-colors.ts";

export const defaultThemeTypography = (): TypographyOptions => ({
  fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
});

const updateThemeTypography = (theme: Theme) => {
  return createTheme(theme, {
    typography: {
      h1: {
        fontWeight: '400',
        fontSize: '1.5rem',
        opacity: 0.9,
        color: ThemeColors.gray800,
        '@media (min-width: 600px)': {
          fontSize: '2.5rem',
        },
      },
      h2: {
        fontWeight: '300',
        fontSize: '3.5rem',
        color: ThemeColors.gray800,
      },
      h3: {
        fontWeight: '700',
        fontSize: '1rem',
        color: ThemeColors.gray800,
        '@media (min-width: 600px)': {
          fontSize: '1.25rem',
        },
      },
      h4: {
        fontWeight: '400',
        fontSize: '3rem',
        color: ThemeColors.gray800,
      },
      h5: {
        fontWeight: '400',
        fontSize: '1.125rem',
        color: ThemeColors.gray800,
        '@media (min-width: 600px)': {
          fontSize: '1.75rem',
        },
      },
      h6: {
        fontWeight: '300',
        fontSize: '1.125rem',
        color: ThemeColors.gray800,
        '@media (min-width: 600px)': {
          fontSize: '1.75rem',
        },
      },
      subtitle1: {
        fontWeight: '900',
        fontSize: '1rem',
        color: ThemeColors.gray800,
        textTransform: 'uppercase',
      },
      body1: {
        fontWeight: '400',
        fontSize: '1rem',
        color: ThemeColors.gray800,
        '@media (min-width: 600px)': {
          fontSize: '1.25rem',
        },
      },
      body2: {
        fontWeight: '400',
        fontSize: '0.875rem',
        color: ThemeColors.gray800,
        '@media (min-width: 600px)': {
          fontSize: '1.125rem',
        },
      },
    } as TypographyOptions,
  });
};

export default updateThemeTypography;
