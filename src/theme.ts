import { Theme } from "theme-ui";

export const theme: Theme = {
  useColorSchemeMediaQuery: true,
  colors: {
    background: "white",
    text: "black",
    modes: {
      dark: {
        background: "black",
        text: "white",
      },
    },
  },
  fonts: {
    body:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
  styles: {
    root: {
      fontFamily: "body",
      padding: 0,
      margin: 0,
    },
  },
};
