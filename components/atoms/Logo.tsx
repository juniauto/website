import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

interface LogoIconProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    height: number;
};

const LogoIcon = (props: LogoIconProps) => (
    <img {...props}  src={require('../../public/assets/svg/logo.svg')} />
);

export default LogoIcon;