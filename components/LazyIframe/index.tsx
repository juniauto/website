import React, { DetailedHTMLProps, IframeHTMLAttributes } from 'react';

interface LazyIframeProps extends DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> {
    loading?: string;
};

export default function LazyIframe(props: LazyIframeProps) {
    const Component = 'iframe';
    return <Component {...props} />
}