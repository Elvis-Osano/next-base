import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "home Page" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className="flex gap-4 capitalize text-red-600 font-sans font-bold bg-black w-full p-5 ">
        <Link href="/">
          <a className="hover:text-white">Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a className="hover:text-white">About</a>
        </Link>{" "}
        |{" "}
        <Link href="/users">
          <a className="hover:text-white">Users List</a>
        </Link>{" "}
        |{" "}
        <a href="/api/users" className="hover:text-white">
          Users API
        </a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
