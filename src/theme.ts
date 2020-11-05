import { Theme } from "theme-ui";

export const theme: Theme = {
  useColorSchemeMediaQuery: true,
  useLocalStorage: true,
  colors: {
    background: "#fff",
    text: "#000",
    primary: "#2ea44f",
  },
  fonts: {
    body:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    heading: "inherit",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 600,
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
  cards: {
    primary: {
      padding: 3,
      borderRadius: 4,
      border: "solid",
      borderWidth: 1,
      borderColor: "#e1e4e8",
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      p: 1,
      bg: "#fafbfc",
      borderColor: "#e1e4e8",
    },
  },
};
