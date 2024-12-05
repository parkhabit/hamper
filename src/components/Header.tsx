"use client";
import React from "react";
import hamperItems, { HamperItem } from "../data";
import Link from "next/link";
import Image from "next/image";
import menuIcon from "../../public/menu.svg";

const Header = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <header className="bg-[#E15C41] flex h-14 w-full items-center">
      <div className="flex justify-between w-[50%] px-2">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Image src={menuIcon} alt="expandable menu" />
        </button>
        <Link href="/">K&D</Link>
      </div>
      <nav
        className={`${
          menuOpen ? "visible" : "hidden"
        } flex flex-col bg-[#E15C41] w-[30%] h-[100%] absolute top-14 pr-5`}
      >
        {hamperItems.map((i: HamperItem) => (
          <Link
            key={i.title}
            href={{ pathname: "/hamper-item", query: { key: i.key } }}
            className="text-sm text-[#EFEBD1] hover:text-[#2B4339] pt-2 pl-1 pb-1"
            onClick={() => setMenuOpen(false)}
          >
            {i.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
