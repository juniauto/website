import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

interface IconProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    height: number;
};

const Icon = (src: string) => (props: IconProps) => (
    <img {...props}  src={src} />
);

export default Icon;