"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes } from "react";

export const ActiveLink = (
  props: AnchorHTMLAttributes<HTMLAnchorElement> & {
    path: string;
    text: string;
  }
) => {
  const pathName = usePathname();
  const { path, text, ...rest } = props;

  return (
    <Link className={`${pathName === path && ""}`} href={path} {...rest}>
      {text}
    </Link>
  );
};
