"use client";
import Link from "next/link";
import React from "react";
import { ActiveLink } from "./active-link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems, subnavItems } from "@/utils";
import { MenuIcon } from "./menu";

export const Navbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <div
      className={`${
        pathName === "/" && "absolute top-0 left-0 w-full z-10"
      } transition-all duration-300`}
    >
      <nav className="w-full flex items-center justify-between bg-blue-800 p-4 lg:p-5 ">
        <Link className="mr-0 lg:mr-2 flex items-center" href={"/"}>
          <Image
            alt="hola"
            src="/cblogowhite.png"
            width={200}
            height={200}
            className="w-auto h-16"
          />
        </Link>

        <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="hidden md:flex items-center justify-end md:justify-center gap-x-4 text-white font-semibold">
          {navItems.map((navItem, index) => (
            <ActiveLink
              key={`${navItem.path}-${index}`}
              {...navItem}
              className="hover:text-zinc-500"
            />
          ))}
          <Link
            href="portal_pagos"
            className={
              "rounded-lg hover:bg-orange-500 py-2 px-4 transition-all duration-150"
            }
          >
            PAGOS
          </Link>
        </div>
      </nav>
      <nav
        className={`absolute justify-center z-10 bg-orange-500 p-2 transition-all duration-300 w-full -top-80 md:top-0`}
      >
        <div
          className={`flex items-center justify-center text-center gap-x-4 font-semibold tracking-wider text-white md:flex-row md:gap-y-0 md:my-0 ${
            isOpen ? "flex-col gap-y-6 my-4" : ""
          }`}
        >
          {subnavItems.map((navItem, index) => (
            <ActiveLink
              key={`${navItem.path}-${index}`}
              {...navItem}
              className="hover:text-zinc-500"
            />
          ))}
        </div>
      </nav>
    </div>
  );
};
