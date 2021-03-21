import React from 'react';
import Head from 'next/head';

const Favicons = () => (
    <Head>
        <link href="/favicon.ico" rel="icon" />
        <link href="/assets/icons/favicon_32.png" rel="icon" />
        <link href="/assets/icons/favicon_180.png" rel="apple-touch-icon" />
    </Head>
);

export default Favicons;