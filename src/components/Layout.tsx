import React, { ReactNode } from "react";
import Head from "next/head";
import { Header } from "./Header";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="relative flex-grow 2xl:container 2xl:mx-auto">
          {children}
        </main>
        <footer className="flex flex-col items-center justify-around w-full px-4 py-4 text-xs tracking-wide text-secondary-300 bg-secondary-200 item-end sm:flex-row sm:justify-between ">
          <span className="mb-1 sm:mb-0">
            Made with ❤ by using Nextjs and Contentfull
          </span>
          <span className="">&copy; Ramy Niranjan</span>
        </footer>
      </div>
    </>
  );
};

export default Layout;
