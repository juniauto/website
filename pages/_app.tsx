import React, { useEffect } from 'react';
import Script from 'next/script';

import '../theme/bootstrap.scss';
import '../public/assets/css/style.css';
import '../public/assets/css/redesign_globals.css';
import { GA_TRACKING_ID, initialize } from '../lib/gtag';

export default function MyApp({ Component, pageProps }) {
    useEffect(initialize, []);

    return <>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <Component {...pageProps} />
    </>
}
