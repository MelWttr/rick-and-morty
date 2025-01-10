import { Outlet } from 'react-router-dom';
import { FC, memo } from 'react';
import cls from './Layout.module.scss';
import { Header } from '../../widgets';

export const Layout: FC = memo(() => (
    <div className={cls.container}>
        <Header />
        <Outlet />
    </div>
));
