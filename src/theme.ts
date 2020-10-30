import { Theme } from "theme-ui";

export const theme: Theme = {
  useColorSchemeMediaQuery: true,
  colors: {
    background: "#fff",
    text: "#000",
    primary: "#5eb85c",
    modes: {
      dark: {
        background: "#0a0a0a",
        text: "#fff",
      },
    },
  },
  fonts: {
    body:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    heading:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  styles: {
    root: {
      fontFamily: "body",
      padding: 0,
      margin: 0,
    },
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
    },
  },
};
