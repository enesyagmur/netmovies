import Link from "next/link";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full md:h-20 flex items-center justify-between text-white text-xl bg-gradient-to-b from-neutral-700 to-transparent ">
      <Link
        href={"/"}
        className="w-3/12 h-full flex items-center justify-start pl-2"
      >
        <FaPlayCircle /> <p className="font-bold pl-2">NETMOVIES</p>
      </Link>
      <nav className="w-6/12 h-full flex items-center justify-end">
        <Link href={"/movies"} className="w-24">
          Movies
        </Link>
        <Link href={"/series"} className="w-24">
          Series
        </Link>
        <Link href={"/kids"} className="w-24">
          Kids
        </Link>
      </nav>
    </header>
  );
};

export default Header;
