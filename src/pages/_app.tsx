import "../styles/globals.css";

import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "theme-ui";

import { theme } from "../theme";

const CustomApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>PokerNook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default CustomApp;
