import { Outlet } from 'react-router-dom';
import { FC, memo } from 'react';
import { Header } from '../Header/Header';
import cls from './Layout.module.scss';

export const Layout: FC = memo(() => (
    <div className={cls.container}>
        <Header />
        <Outlet />
    </div>
));
