import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

interface IconProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    height: number;
};

const createIcon = (src: string): React.FC<IconProps> => function Icon(props) {
    return <img {...props} src={src} />
};

export default createIcon;