import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

interface LogoIconProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    height: number;
};

const LogoIcon = (props: LogoIconProps) => (
    <img {...props} alt="Logo da Juniauto"  src={require('../../public/assets/svg/logo.svg')} />
);

export default LogoIcon;