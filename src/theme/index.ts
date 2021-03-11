import { alpha, lighten } from "@theme-ui/color";
import { Theme } from "theme-ui";

export const theme: Theme = {
  useLocalStorage: false,
  colors: {
    background: "#06090e",
    text: "#f0f6fc",
    primary: "#238636",
    secondary: "#1f71eb",
    success: "#56d364",
    error: "#f85249",
    border: "#2f353d",
    muted: "#0e1116",
    textMuted: "#4b5669",
    menuItemActiveBackground: "#171b21",
    menuItemActiveBorder: "#e8886d",
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
      color: "secondary",
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
    help: { color: "text", fontSize: 0, fontWeight: "body" },
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
      display: "block",
      borderRadius: 4,
      color: "text",
      textDecoration: "none",
      p: 2,
      ":hover": {
        color: "text",
        bg: alpha("secondary", 0.1),
        cursor: "pointer",
      },
      "&.active": {
        bg: "secondary",
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
      bg: "transparent",
      border: "solid",
      borderColor: "border",
      borderWidth: 1,
      color: "secondary",
      px: 3,
      py: 2,
      ":hover": {
        borderColor: lighten("border", 0.2),
        cursor: "pointer",
      },
      ":active": {
        borderColor: "border",
      },
    },
    tertiary: {
      bg: "transparent",
      border: "solid",
      borderColor: "border",
      borderWidth: 1,
      color: "text",
      px: 3,
      py: 2,
      ":hover": {
        borderColor: lighten("border", 0.2),
        cursor: "pointer",
      },
      ":active": {
        borderColor: "border",
      },
    },
    danger: {
      bg: "transparent",
      border: "solid",
      borderColor: "border",
      borderWidth: 1,
      color: "error",
      px: 3,
      py: 2,
      ":hover": {
        borderColor: lighten("border", 0.2),
        cursor: "pointer",
      },
      ":active": {
        borderColor: "border",
      },
    },
    menu: {
      alignItems: "center",
      borderRadius: 0,
      bg: "inherit",
      display: "flex",
      px: 3,
      py: 1,
      width: "100%",
      ":hover": {
        cursor: "pointer",
        bg: "secondary",
      },
    },
    unstyled: {
      bg: "transparent",
      border: "none",
      p: 0,
      m: 0,
      ":hover": {
        cursor: "pointer",
      },
    },
    close: {
      color: "text",
      ":hover": {
        bg: lighten("muted", 0.05),
        cursor: "pointer",
      },
      ":active": {
        bg: lighten("muted", 0.1),
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
      display: "flex",
      flexDirection: "column",
      py: 2,
      border: "solid",
      borderColor: "border",
      borderRadius: 4,
      borderWidth: 1,
      bg: "muted",
      boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.12)",
      minWidth: 300,
    },
    modal: {
      display: "flex",
      flexDirection: "column",
      bg: "muted",
      border: "solid",
      borderColor: "border",
      borderRadius: 4,
      borderWidth: 1,
      boxShadow: "0 18px 48px 0 rgba(0, 0, 0, .35)",
      minWidth: 530,
      position: "relative",
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
      borderRadius: 4,
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
        borderColor: "secondary",
      },
    },
  },
};
