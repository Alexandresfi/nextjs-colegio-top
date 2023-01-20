import "tailwindcss/tailwind.css";
import "../../styles/globals.css";
import type { AppProps } from "next/app";

import MainContainer from "../components/MainContainer/MainContainer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  );
}
