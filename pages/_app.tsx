import React from 'react';

import '../theme/bootstrap.scss';
import '../public/assets/css/style.css';

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}