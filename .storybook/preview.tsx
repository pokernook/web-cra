import { ThemeProvider } from "theme-ui";
import { addDecorator } from "@storybook/react";
import { theme } from "../src/theme";

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));
