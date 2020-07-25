import React, { DetailedHTMLProps, IframeHTMLAttributes } from 'react';
import dynamic from 'next/dynamic';


interface LazyIframeProps extends DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> {
    loading?: string;
    height: number;
};

export default function LazyIframe(props: LazyIframeProps) {
    const Component = 'iframe';
    const LazyLoad: any = dynamic(() => import('react-lazyload'), {
        ssr: false,
        loading: () => <div style={{ height: props.height }} />
    });
    return <LazyLoad  height={props.height}>
        <Component {...props} />
    </LazyLoad>;
}