import { alpha, lighten } from "@theme-ui/color";
import { Theme } from "theme-ui";

export const theme: Theme = {
  useLocalStorage: false,
  colors: {
    background: "#06090e",
    text: "#c9d1d9",
    primary: "#238636",
    success: "#56d364",
    error: "#f85249",
    link: "#459cff",
    border: "#21262d",
    muted: "#0e1116",
    textMuted: "#384252",
    menuItemActiveBackground: "#171b21",
    menuItemActiveBorder: "#e8886d",
    navLinkHoverBackground: "#141921",
    navLinkActiveBackground: "#1f2836",
    inputFocusBorder: "#268bff",
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
  text: {
    default: { color: "text", fontSize: 1, fontWeight: "body" },
    success: { color: "success", fontSize: 1, fontWeight: "bold" },
    danger: { color: "error", fontSize: 1, fontWeight: "bold" },
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
        bg: "navLinkHoverBackground",
      },
      "&.active": {
        bg: "navLinkActiveBackground",
      },
    },
  },
  buttons: {
    primary: {
      bg: "primary",
      border: "solid",
      borderColor: lighten("primary", 0.1),
      borderWidth: 1,
      color: lighten("text", 0.2),
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
      bg: "background",
      border: "solid",
      borderColor: "border",
      borderWidth: 1,
      color: "link",
      px: 3,
      py: 2,
      ":hover": {
        bg: lighten("background", 0.05),
        cursor: "pointer",
      },
      ":active": {
        bg: "background",
      },
    },
    tertiary: {
      bg: "background",
      border: "solid",
      borderColor: "border",
      borderWidth: 1,
      color: "text",
      px: 3,
      py: 2,
      ":hover": {
        bg: lighten("background", 0.05),
        cursor: "pointer",
      },
      ":active": {
        bg: "background",
      },
    },
    danger: {
      bg: "background",
      border: "solid",
      borderColor: "border",
      borderWidth: 1,
      color: "error",
      px: 3,
      py: 2,
      ":hover": {
        bg: lighten("background", 0.05),
        cursor: "pointer",
      },
      ":active": {
        bg: "background",
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
    menu: {
      py: 2,
      border: "solid",
      borderColor: "border",
      borderRadius: 4,
      borderWidth: 1,
      bg: "muted",
      boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.12)",
      position: "absolute",
      right: 0,
      minWidth: 300,
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
      borderColor: "border",
      outline: "none",
      ":focus": {
        borderColor: "link",
      },
    },
  },
};
