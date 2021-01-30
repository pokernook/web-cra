import { alpha, lighten } from "@theme-ui/color";
import { Theme } from "theme-ui";

export const theme: Theme = {
  useLocalStorage: false,
  colors: {
    background: "#090d13",
    border: "#21262d",
    error: "#b83232",
    gray: "#212730",
    link: "#459cff",
    menuItemActiveBackground: "#171b21",
    menuItemActiveBorder: "#e8886d",
    muted: "#0d1117",
    mutedText: "#384252",
    primary: "#238636",
    text: "#fdfefd",
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
      ":hover": {
        textDecoration: "underline",
      },
    },
    hr: { borderColor: "border", borderWidth: 1, m: 0 },
    root: {
      fontFamily: "body",
      fontWeight: "body",
      fontSize: 1,
      p: 0,
      m: 0,
    },
  },
  sizes: {
    sidebar: 350,
  },
  links: {
    menu: {
      color: "text",
      fontWeight: "body",
      textDecoration: "none",
      ":hover": {
        bg: "menuItemActiveBackground",
      },
      "&.active": {
        bg: "menuItemActiveBackground",
        borderLeft: "solid",
        borderLeftColor: "menuItemActiveBorder",
        borderLeftWidth: 2,
      },
    },
    nav: {
      color: "link",
      fontWeight: "bold",
      textDecoration: "none",
      ":hover": {
        textDecoration: "underline",
      },
      "&.active": {
        textDecoration: "underline",
      },
    },
  },
  buttons: {
    primary: {
      bg: "primary",
      border: "solid",
      borderColor: lighten("primary", 0.1),
      borderWidth: 1,
      color: "text",
      fontWeight: "bold",
      px: 3,
      py: 2,
      "&:hover": {
        bg: lighten("primary", 0.05),
        cursor: "pointer",
      },
    },
    secondary: {
      bg: "gray",
      border: "solid",
      borderColor: lighten("gray", 0.1),
      borderWidth: 1,
      color: "link",
      fontWeight: "bold",
      px: 3,
      py: 2,
      ":hover": {
        bg: lighten("gray", 0.05),
        borderColor: "link",
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
  images: {
    avatar: {
      bg: "black",
      border: "solid",
      borderColor: "border",
      borderWidth: 1,
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
