import "tailwindcss/tailwind.css";
import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google"

const poppins = Poppins({
  weight: ['300','400','500','600','700','800'],
  style: ['normal'],
  subsets:['latin']
})

import MainContainer from "../components/MainContainer/MainContainer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainContainer>
      <style jsx global>
          {
            `
              html {
                font-family: ${ poppins.style.fontFamily}
              }
            `
          }
        </style>
      <Component {...pageProps} />
    </MainContainer>
  );
}
