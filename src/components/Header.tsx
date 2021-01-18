import React, { useState } from "react";
import classnames from "classnames";
import NavLink from "./NavLink";
import Link from "next/link";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const [show, setShow] = useState(false);
  const navClass = classnames(
    " sm:static sm:translate-x-0 sm:block sm:bg-transparent sm:h-auto ",
    "absolute top-22 left-0 w-full h-screen   flex flex-col justify-evenly ml-auto px-4 py-2 bg-secondary-200 items-center ",
    show ? "transform translate-x-0 " : "transform translate-x-full"
  );
  const svgPathOpen = classnames(!show ? "block" : "hidden");
  const svgPathClose = classnames(show ? "block" : "hidden");
  //
  const headerSm = classnames(
    "fixed left-0 top-0 z-50 w-full   bg-secondary-100  font-exo tracking-wide font-normal sm:flex sm:justify-evenly sm:items-center px-6 py-6 trans-ease-out"
  );

  return (
    <header className={headerSm}>
      <div className="flex justify-between w-full px-4 py-2 item-center sm:justify-center">
        <div className="-mt-1 text-2xl font-semibold tracking-wider text-center text-primary-100 lg:text-3xl font-iceland sm:-mt-0">
          <Link href="/">Ramy Niranjan</Link>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-white fill-current sm:hidden"
          onClick={() => setShow(!show)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
            className={svgPathOpen}
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
            className={svgPathClose}
          />
        </svg>
      </div>
      <nav className={navClass} onClick={() => setShow(!show)}>
        <NavLink href="/" linkName="Home" />
        <NavLink href="/works" linkName="Works" />
        <NavLink href="/about" linkName="About" />
        <NavLink href="/contact" linkName="Contact" />
      </nav>
    </header>
  );
};
