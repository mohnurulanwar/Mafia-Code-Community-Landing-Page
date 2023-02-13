import { type AppType } from "next/app";
import NextNprogress from 'nextjs-progressbar'
import { api } from "../utils/api";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <NextNprogress
        color="#ff1cf7"
        options={{ showSpinner: false }}
        showOnShallow={true}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(MyApp);
