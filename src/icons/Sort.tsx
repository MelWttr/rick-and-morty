import * as React from 'react';

interface SortProps {
    fill?: string;
    classname?: string
}

export const Sort: React.FC<SortProps> = ({ fill = '#000', classname }) => (
    <svg
        className={classname || null}
        xmlns='http://www.w3.org/2000/svg'
        xmlSpace='preserve'
        id='Capa_1'
        width='16'
        height='16'
        fill={fill}
        version='1.1'
        viewBox='0 0 490 490'
    >
        <path d='M85.877 154.014v274.295h45.829V154.014l48.791 67.199 37.087-26.943L108.792 44.46 0 194.27l37.087 26.943zM404.13 335.988V61.691h-45.829V335.99l-48.798-67.203-37.087 26.943 108.8 149.81L490 295.715l-37.087-26.913z' />
    </svg>
);
