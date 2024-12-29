import React, { FC, SVGProps } from 'react';

interface EmailProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

export const Email: FC<EmailProps> = (props) => {
    const { width = 16, height = 16, ...rest } = props;
    return (
        <svg
            {...rest}
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            fill='none'
            viewBox='0 0 24 24'
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                // eslint-disable-next-line max-len
                d='M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m0 0v1.5a2.5 2.5 0 0 0 2.5 2.5v0a2.5 2.5 0 0 0 2.5-2.5V12a9 9 0 1 0-9 9h4'
            />
        </svg>
    );
};
