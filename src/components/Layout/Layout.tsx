import { FC, ReactNode } from 'react';
import { Header } from '../Header/Header';
import cls from './Layout.module.scss';

interface LayoutProps {
    children: ReactNode
}

export const Layout: FC<LayoutProps> = (props) => {
    const { children } = props;
    return (
        <div className={cls.container}>
            <Header />
            {children}
        </div>
    );
};
