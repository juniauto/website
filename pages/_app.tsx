import React, { useEffect } from 'react';
import Script from 'next/script';

import '../theme/bootstrap.scss';
import '../public/assets/css/style.css';
import { GA_TRACKING_ID, initialize } from '../lib/gtag';
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    useEffect(initialize, []);

    return <>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <Component {...pageProps} />
    </>
}
