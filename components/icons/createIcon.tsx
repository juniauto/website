import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

interface IconProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    height: number;
};

interface createIconProps {
    src: string;
};

const createIcon = ({ src }: createIconProps): React.FC<IconProps> => function Icon(props) {
    return <img {...props} src={src} />
};

export default createIcon;