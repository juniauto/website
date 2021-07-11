import React, { DetailedHTMLProps, IframeHTMLAttributes } from 'react';
import dynamic from 'next/dynamic';

type IframeProps = DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;

interface LazyIframeProps extends IframeProps {
    loading?: string;
    height: number;
};

const LazyIframe: React.FC<LazyIframeProps> = (props) => {
    const Component = 'iframe';
    const LazyLoad = dynamic<IframeProps>(() => import('react-lazyload'), {
        ssr: false,
        loading: function IframeEmpty () { return <div style={{ height: props.height }} />; }
    });
    return <LazyLoad  height={props.height}>
        <Component {...props} />
    </LazyLoad>;
};

export default LazyIframe;