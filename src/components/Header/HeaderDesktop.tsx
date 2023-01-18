import Link from "next/link";
import { LinkNavBar } from "../LinkNavHeader";
export const HearderDesktop = () => {
  return (
    <nav className="bg-red-dark font-extrabold leading-6">
      <ul className="flex justify-between items-center list-none text-white">
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
        <li>
          <Link className="" href="/">
            image
          </Link>
        </li>
        <li>
          <LinkNavBar href="#">Portal do Aluno</LinkNavBar>
        </li>
        <li>
          <LinkNavBar href="#">Mangahigh</LinkNavBar>
        </li>
      </ul>
    </nav>
  );
};
