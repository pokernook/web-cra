import { alpha } from "@theme-ui/color";
import { Theme } from "theme-ui";

export const theme: Theme = {
  useLocalStorage: false,
  colors: {
    background: "#0d1117",
    text: "#fdfefd",
    mutedText: "#8c8c8c",
    link: "#4c7dee",
    primary: "#258e3a",
    error: "#b83232",
    muted: "#090d13",
    border: "#21262d",
  },
  fonts: {
    code: "source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace",
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
      fontWeight: "body",
      fontSize: 1,
      p: 0,
      m: 0,
    },
  },
  sizes: {
    sidebar: 320,
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
  alerts: {
    error: {
      bg: alpha("error", 0.2),
      border: "solid",
      borderColor: "error",
      borderWidth: 1,
      color: "text",
      fontWeight: "body",
      p: 3,
      overflow: "hidden",
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
      mb: 2,
    },
    input: {
      px: 2,
      py: 1,
      bg: "muted",
      borderColor: "border",
    },
  },
};
