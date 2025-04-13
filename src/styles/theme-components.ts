import { Components, createTheme, Theme } from "@mui/material";
import { themeButtons } from "./theme-buttons.ts";

const updateThemeComponents = (theme: Theme) =>
  createTheme(theme, {
    components: {
      // Prevent icons from displaying Huge while page is still loading.
      MuiSvgIcon: {
        defaultProps: {
          display: "none",
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            "&.Mui-error": {
              color: theme.palette.error,
            },
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: theme.palette.primary.dark,
            fontSize: "1.25rem",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          icon: { display: "flex", alignItems: "center" },
          // uncomment to control background color of toast messages
          // standardSuccess: { backgroundColor: theme.palette.success.main },
          // standardWarning: { backgroundColor: theme.palette.warning.main },
          // standardInfo: { backgroundColor: theme.palette.info.light },
        },
      },
      MuiButton: themeButtons,
    } as Components,
  });

export default updateThemeComponents;
