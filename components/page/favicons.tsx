import React from 'react';
import Head from 'next/head';

const Favicons = () => (
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="/assets/img/favicon.png" rel="icon" />
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
    </Head>
);

export default Favicons;