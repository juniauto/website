import React from 'react';
import Script from 'next/script';

import '../theme/bootstrap.scss';
import '../public/assets/css/style.css';
import { GA_TRACKING_ID } from '../lib/gtag';

export default function MyApp({ Component, pageProps }) {
    return <>
        <Script dangerouslySetInnerHTML={{
            __html: (`
                (function () {
                    var id = 'gtaginit';
                    if (window[id]) { return; }

                    window.dataLayer = window.dataLayer || [];
                    window.gtag = function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}');

                    window[id] = true;
                })();
            `)
        }} />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <Component {...pageProps} />
    </>
}
