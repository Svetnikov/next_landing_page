"use client";
import Link from "next/link";
import React from "react";
import { ActiveLink } from "./active-link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems, subnavItems } from "@/utils";

export const Navbar = () => {
  const pathName = usePathname();

  return (
    <div
      className={`${pathName === "/" && "absolute top-0 left-0 w-full z-10"} `}
    >
      <nav className="flex justify-stretch lg:justify-between bg-blue-800 p-2 lg:p-5 ">
        <Link className="mr-0 lg:mr-2 flex items-center" href={"/"}>
          <Image alt="hola" src="/cblogowhite.png" width={200} height={200} />
        </Link>

        <div className="flex items-center justify-end md:justify-center gap-x-4 text-white font-semibold">
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
      <nav className="flex justify-center z-10 bg-orange-500 p-2">
        <Link className="mr-2 flex items-center" href={"/"} />
        <div className="flex items-center justify-center text-center gap-x-4 font-semibold tracking-wider text-white">
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
