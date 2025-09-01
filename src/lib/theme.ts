'use client';

import { createTheme } from "@mui/material/styles";

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
});

export default theme;
