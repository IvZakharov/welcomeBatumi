import Head from 'next/head';
import React, { ReactElement } from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

type Page = {
  children: ReactElement;
};

export const MainLayout: React.FC<Page> = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  return (
    <>
      <Head>
        <title>{''}</title>
        <meta name="description" content={''} />
        <meta name="keywords" content={'keywords'} />
        <meta property="og:image" content="/img/head/meta.jpg" />
      </Head>
      <Header />

      <div className="main">{children}</div>
    </>
  );
};
