import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import cls from './Layout.module.scss';

export const Layout = () => (
    <div className={cls.container}>
        <Header />
        <Outlet />
    </div>
);
