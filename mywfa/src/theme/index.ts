import { createTheme } from "@mui/material";

export const dark = createTheme({
  palette: {
    // @ts-ignore
    type: "dark",
    primary: {
      main: "#242425",
      light: "#6d6d6d",
      contrastText: "#fca311",
    },
    secondary: {
      main: "#fca311",
      dark: "rgba(234,146,25,0.99)",
      light: "#ffc661",
    },
    error: {
      main: "#b71c1c",
    },
    warning: {
      main: "#e65100",
    },
    info: {
      main: "#64b5f6",
    },
    success: {
      main: "#81c784",
    },
    background: {
      default: "#141414",
      paper: "#242425",
    },
    text: {
      primary: "#ffffff",
      secondary: "#f8b562",
      disabled: "#ffffff",
    },
  },
});

export const light = createTheme({
  palette: {
    // @ts-ignore
    type: "light",
    primary: {
      main: "#fca311",
      light: "#6d6d6d",
      contrastText: "#404042",
    },
    secondary: {
      main: "#fca311",
      dark: "rgba(234,146,25,0.99)",
      light: "#ffc661",
    },
    background: {
      default: "#fff",
      paper: "rgb(255,255,255)",
    },
    error: {
      main: "#b71c1c",
    },
    warning: {
      main: "#e65100",
    },
    info: {
      main: "#64b5f6",
    },
    success: {
      main: "#81c784",
    },
    text: {
      primary: "#fca311",
    },
  },
});
