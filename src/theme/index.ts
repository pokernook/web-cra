import { Theme } from "theme-ui";

export const theme: Theme = {
  useColorSchemeMediaQuery: true,
  useLocalStorage: true,
  colors: {
    background: "#fff",
    text: "#000",
    link: "#4c7dee",
    primary: "#2ea44f",
    muted: "#fafbfc",
    border: "#e1e4e8",
    modes: {
      dark: {
        background: "#0d1117",
        text: "#fdfefd",
        primary: "#238636",
        muted: "#090d13",
        border: "#21262d",
      },
    },
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
    bold: 500,
  },
  styles: {
    a: {
      color: "link",
      fontWeight: "bold",
      textDecoration: "none",
    },
    root: {
      fontFamily: "body",
      fontSize: 1,
      p: 0,
      m: 0,
    },
  },
  buttons: {
    primary: {
      bg: "primary",
      color: "#fff",
      px: 3,
      py: 2,
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  cards: {
    primary: {
      p: 3,
      border: "solid",
      borderColor: "border",
      borderRadius: 4,
      borderWidth: 1,
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      px: 2,
      py: 1,
      bg: "muted",
      borderColor: "border",
    },
  },
};
