import type { FC } from "react";
import Head from "next/head";

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Landing page of Mafia Code Community"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
