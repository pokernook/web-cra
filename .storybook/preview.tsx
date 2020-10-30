import { ThemeProvider } from "theme-ui";
import { addDecorator, addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";
import { theme } from "../src/theme";

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));

addParameters({ docs: { theme: themes.dark } });
