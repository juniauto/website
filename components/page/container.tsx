import React from 'react';
import Favicons from './favicons';
import Header from './header';
import Footer from './footer';
import Head from 'next/head';

const PageContainer: React.FC<React.PropsWithChildren<{}>> = (props) => (
    <div className="page">
      <Head>
        <meta name="description" content="Reboque para carros e motos em Campo Grande e região. Atendimento 24 horas rápido e de qualidade para o momento que você mais precisa." />
        <meta name="google-site-verification" content="iTYthBEVOUkhuVONHqDzql8goKZujTE9uVSE5TBuT_E" />
      </Head>

      <Favicons />
      <Header />

      {props.children}

      <Footer />
    </div>
);

export default PageContainer;
