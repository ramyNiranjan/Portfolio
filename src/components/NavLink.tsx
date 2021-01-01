import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classnames from "classnames";

interface NavLinkProps {
  href: string;
  linkName: string;
  activeClassName?: string;
}

export const NavLink = ({ href, linkName }: NavLinkProps) => {
  const { pathname } = useRouter();
  const navLink = classnames(
    " -mt-22 text-white px-6 py-2  rounded  trans-ease-out border-transparent transform  active:scale-95",
    "sm:ml-4   hover:bg-transparent border hover:border-primary-300 lg:text-xl tracking-wider text-baseline",
    pathname === href ? "text-primary-300" : null
  );

  return (
    <Link href={href}>
      <a className={navLink}>{linkName}</a>
    </Link>
  );
};

export default NavLink;
