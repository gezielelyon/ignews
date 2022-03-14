import { SessionProvider } from "next-auth/react";

import { Header } from "../src/components/Header";

import "../src/styles/global.scss";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Header />

      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
