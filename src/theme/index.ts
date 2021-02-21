import { alpha, lighten } from "@theme-ui/color";
import { Theme } from "theme-ui";

export const theme: Theme = {
  useLocalStorage: false,
  colors: {
    background: "#090d13",
    border: "#21262d",
    primary: "#238636",
    error: "#f85249",
    link: "#459cff",
    gray: "#212730",
    textSuccess: "#56d364",
    textDanger: "#f85149",
    menuItemActiveBackground: "#171b21",
    menuItemActiveBorder: "#e8886d",
    inputFocusBorder: "#268bff",
    muted: "#0d1117",
    text: "#c9d1d9",
    mutedText: "#384252",
    primaryButtonText: "#fdfefd",
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
        cursor: "pointer",
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
  text: {
    default: { color: "text", fontSize: 1, fontWeight: "body" },
    success: { color: "textSuccess", fontSize: 1, fontWeight: "bold" },
    danger: { color: "textDanger", fontSize: 1, fontWeight: "bold" },
  },
  links: {
    menu: {
      borderLeft: "solid",
      borderLeftColor: "transparent",
      borderLeftWidth: 2,
      color: "text",
      fontWeight: "body",
      textDecoration: "none",
      ":hover": {
        bg: "menuItemActiveBackground",
      },
      "&.active": {
        bg: "menuItemActiveBackground",
        borderLeftColor: "menuItemActiveBorder",
      },
    },
    nav: {
      borderRadius: 4,
      color: "text",
      fontWeight: "bold",
      textDecoration: "none",
      p: 2,
      ":hover": {
        bg: "gray",
      },
      "&.active": {
        bg: "gray",
        color: "link",
      },
    },
  },
  buttons: {
    primary: {
      bg: "primary",
      border: "solid",
      borderColor: lighten("primary", 0.1),
      borderWidth: 1,
      color: "primaryButtonText",
      fontWeight: "bold",
      px: 3,
      py: 2,
      "&:hover": {
        bg: lighten("primary", 0.05),
        cursor: "pointer",
      },
      ":active": {
        bg: "primary",
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
      ":active": {
        bg: "gray",
      },
    },
    tertiary: {
      bg: "gray",
      border: "solid",
      borderColor: lighten("gray", 0.1),
      borderWidth: 1,
      color: "text",
      fontWeight: "bold",
      px: 3,
      py: 2,
      ":hover": {
        bg: lighten("gray", 0.05),
        borderColor: "text",
        cursor: "pointer",
      },
      ":active": {
        bg: "gray",
      },
    },
    danger: {
      bg: "gray",
      border: "solid",
      borderColor: lighten("gray", 0.1),
      borderWidth: 1,
      color: "error",
      fontWeight: "bold",
      px: 3,
      py: 2,
      ":hover": {
        bg: lighten("gray", 0.05),
        borderColor: "error",
        cursor: "pointer",
      },
      ":active": {
        bg: "gray",
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
      outline: "none",
      ":focus": {
        borderColor: "inputFocusBorder",
      },
    },
  },
};
