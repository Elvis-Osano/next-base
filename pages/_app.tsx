import { StyledEngineProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { Layout } from "../src/components";
import "../styles/styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyledEngineProvider>
  );
}
