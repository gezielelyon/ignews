import { Header } from "../src/components/Header";

import "../src/styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
