'use client';

import { createTheme } from "@mui/material/styles";
import { PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    customColors: {
      headerFontColor: string;
    };
  }
  interface ThemeOptions {
    customColors?: {
      headerFontColor?: string;
    };
  }
}

const theme = createTheme({
    cssVariables: true,
    palette: {
        background: {
        default: "#ffffff",
        paper: "#F8F9FA",
        },
    },
    typography: {
        fontFamily: 'var(--font-roboto)',
        iconSmall: {
        fontSize: 16,
        },
        iconMedium: {
        fontSize: 18,
        },
        iconLarge: {
        fontSize: 24,
        },
    },
    customHeight: {
        footerHeight: 100, // pixels
    },
    customColors: {
        headerFontColor: "#5F6368",
    },
});

export default theme;
