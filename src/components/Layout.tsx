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
        {/* <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      <div className="flex flex-col min-h-screen ">
        <Header />
        <main className="flex-grow  2xl:container  2xl:mx-auto">
          {children}
        </main>
        <footer className="bg-secondary-200 w-full px-4 py-4 flex justify-center item-end">
          <span className="text-white">I'm here to stay (Footer)</span>
        </footer>
      </div>
    </>
  );
};

export default Layout;
