import { Theme } from "theme-ui";

export const theme: Theme = {
  useColorSchemeMediaQuery: true,
  useLocalStorage: true,
  colors: {
    background: "#fff",
    text: "#000",
    primary: "#54a058",
    modes: {
      dark: {
        background: "#121212",
        text: "#fff",
      },
    },
  },
  fonts: {
    body:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    heading: "inherit",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  styles: {
    root: {
      fontFamily: "body",
      fontSize: 1,
      padding: 0,
      margin: 0,
    },
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      px: 3,
      py: 2,
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      mt: "0.375rem",
      p: 1,
      bg: "#fafbfc",
      borderColor: "#e1e4e8",
    },
  },
};
