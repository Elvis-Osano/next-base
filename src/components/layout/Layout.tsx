import Head from "next/head";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => (
  <React.Fragment>
    <Head>
      <title>Loading...</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className="flex gap-4 capitalize text-red-600 font-sans font-bold bg-black w-full p-5 ">
        Hey Hello
      </nav>
    </header>
    {children}
  </React.Fragment>
);

export default Layout;
