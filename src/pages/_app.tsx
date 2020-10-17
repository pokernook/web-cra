import "../styles/globals.css";

import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";

import { theme } from "../theme";

const CustomApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default CustomApp;
