import { ReactNode } from "react";
import { HearderDesktop } from "../Header/HeaderDesktop";

import { Poppins } from "@next/font/google"

const poppins = Poppins({
  weight: ['300','400','500','600','700','800'],
  style: ['normal'],
  subsets:['latin']
})

interface ChildrenProps {
  children: ReactNode;
}

const MainContainer = ({ children }: ChildrenProps) => {
  return (
    <>
      <HearderDesktop />
      <main className={poppins.className}>{children}</main>
    </>
  );
};

export default MainContainer;
