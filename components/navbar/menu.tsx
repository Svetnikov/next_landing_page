"use client";

import React from "react";
import { IoMenu as Menu } from "react-icons/io5";

export const MenuIcon = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <Menu
      className={`text-white text-5xl md:hidden mr-4 transition-all duration-300 ${
        isOpen ? "rotate-180" : ""
      }`}
      onClick={() => setIsOpen(!isOpen)}
    />
  );
};
