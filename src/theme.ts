import { Theme } from "theme-ui";

export const theme: Theme = {
  useColorSchemeMediaQuery: true,
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
      mt: 1,
    },
  },
};
