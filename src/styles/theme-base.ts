"use client";

import { createTheme, Theme } from "@mui/material";

import ThemePalette from "./theme-palette.ts";
import updateThemeTypography, {
  defaultThemeTypography,
} from "./theme-typography.ts";
import updateThemeComponents from "./theme-components.ts";
import Breakpoints from "./theme-breakpoints.ts";

const buildTheme = (): Theme => {
  let theme = createTheme({
    spacing: (factor: number) => `${0.25 * factor}rem`,
    palette: ThemePalette,
    typography: defaultThemeTypography,
    breakpoints: {
      values: {
        xs: parseInt(Breakpoints.xs),
        sm: parseInt(Breakpoints.sm),
        md: parseInt(Breakpoints.md),
        lg: parseInt(Breakpoints.lg),
        xl: parseInt(Breakpoints.xs),
      },
    },
  });

  theme = updateThemeComponents(theme);
  theme = updateThemeTypography(theme);

  return theme;
};

const ThemeBase = buildTheme();

export default ThemeBase;
