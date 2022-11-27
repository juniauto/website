import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import logo from '../../public/assets/svg/logo.svg'

interface LogoIconProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    height: number;
};

const LogoIcon = (props: LogoIconProps) => (
    <img {...props} alt="Logo da Juniauto"  src={logo.src} />
);

export default LogoIcon;