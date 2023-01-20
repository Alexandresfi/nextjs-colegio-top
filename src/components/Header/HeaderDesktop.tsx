import Link from "next/link";
import Image from "next/image";
import { LinkNavBar } from "./LinkNavHeader";
import { TextsHeader } from "./TextsHeader";

import Logo from "../../assets/icons/icon-logo.svg";

export const HearderDesktop = () => {
  return (
    <header className="h-[773px] bg-[url('https://topsistemadeensino.com/assects/school.png')] bg-no-repeat bg-cover bg-center relative">
      <nav className="flex justify-between font-extrabold leading-6 max-w-screen-xl m-auto">
        <ul className="flex justify-between grow list-none text-white pt-9">
          <li>
            <Link className="" href="/sobre">
              O Top
            </Link>
          </li>
          <li>
            <Link className="" href="/album">
              Top Lembranças
            </Link>
          </li>
        </ul>

        <Link href="/" className="mt-[54px] mx-16">
          <Image src={Logo} alt="logo" />
        </Link>

        <ul className="flex justify-between grow list-none text-white pt-9">
          <li>
            <LinkNavBar href="#">Portal do Aluno</LinkNavBar>
          </li>
          <li>
            <LinkNavBar href="#">Mangahigh</LinkNavBar>
          </li>
        </ul>
      </nav>

      <TextsHeader />
    </header>
  );
};
