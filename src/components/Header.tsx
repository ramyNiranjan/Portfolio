import React, { useState } from "react";
import Link from "next/link";
import classnames from "classnames";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const [show, setShow] = useState(false);
  const navClass = classnames(
    " sm:static sm:translate-x-0 sm:block sm:bg-transparent sm:h-auto",
    "absolute top-22 left-0 w-full h-screen trans-ease-out  flex flex-col justify-evenly ml-auto px-4 py-2 bg-secondary-200 items-center",
    show ? "transform translate-x-0 " : "transform translate-x-full "
  );
  const svgPathOpen = classnames(!show ? "block" : "hidden");
  const svgPathClose = classnames(show ? "block" : "hidden");

  const navLink = classnames(
    " -mt-22 text-white px-6 py-2  rounded  trans-ease-out border-transparent transform  active:scale-95",
    "sm:ml-4   hover:bg-transparent border hover:border-primary-300  "
  );

  const headerSm = classnames(
    "fixed left-0 top-0 z-50 w-full  bg-secondary-100 font-exo tracking-wide font-normal sm:flex sm:justify-evenly sm:items-center px-6 py-6"
  );

  return (
    <header className={headerSm}>
      <div className="flex   justify-between item-center px-4 py-2  w-full sm:justify-center">
        <div className="text-white">Ramy Niranjan</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 fill-current text-white sm:hidden"
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
        <Link href="/">
          <a className={navLink}>Home</a>
        </Link>
        <Link href="/works">
          <a className={navLink}>Works</a>
        </Link>
        <Link href="/about">
          <a className={navLink}>About</a>
        </Link>
        <Link href="/contact">
          <a className={navLink}>Contact</a>
        </Link>
      </nav>
    </header>
  );
};
