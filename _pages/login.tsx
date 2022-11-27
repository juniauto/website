import React from 'react';
import Head from 'next/head';

export default class LoginPage extends React.Component {
    componentDidMount() {
        document.location.href = 'http://intranet.juniauto.com.br';
    }

    render() {
        return <div>
            <Head>
                <meta name="robots" content="noindex" />
            </Head>
            <div>
                Redirecting to intranet...
            </div>
        </div>;
    }
}