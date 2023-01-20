import { ReactNode } from "react";
import { HearderDesktop } from "../Header/HeaderDesktop";

import { Open_Sans } from "@next/font/google";

const inter = Open_Sans({ subsets: ["latin"] });

interface ChildrenProps {
  children: ReactNode;
}

const MainContainer = ({ children }: ChildrenProps) => {
  return (
    <>
      <HearderDesktop />
      <main className={inter.className}>{children}</main>
    </>
  );
};

export default MainContainer;
