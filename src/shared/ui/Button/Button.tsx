import {
    FC, memo, MouseEvent, ReactNode,
} from 'react';
import cn from 'classnames';
import cls from './Button.module.scss';

interface ButtonProps {
  text: string,
  type?: 'button' | 'submit' | 'reset';
  className?: string,
  children?: ReactNode,
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonComponent: FC<ButtonProps> = (props) => {
    const {
        text,
        onClick,
        type = 'button',
        className,
        children,
    } = props;

    return (
        <button
            className={cn(cls.button, { [className]: !!className })}
            onClick={onClick}
            type={type}
        >
            {text}
            {children}
        </button>
    );
};

export const Button = memo(ButtonComponent);
