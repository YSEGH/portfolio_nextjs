import React from "react";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import "../css/style.css";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
};

export default MyApp;
