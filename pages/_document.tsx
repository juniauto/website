import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

const googleAnalyticsSnippet = `
    window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
    ga('create', 'UA-6499860-3', 'auto');
    ga('send', 'pageview');
`;

export default class ApplicationDocument extends Document {
    render() {
        return (
            <Html lang="pt-BR">
                <Head />
                <link rel="preconnect" href="https://www.google-analytics.com" />
                <script dangerouslySetInnerHTML={{ __html: googleAnalyticsSnippet }}></script>
                <body>
                    <Main />
                    <NextScript />
                    <script async defer src='https://www.google-analytics.com/analytics.js'></script>
                </body>
            </Html>
        );
    }
}