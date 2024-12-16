import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { AppRoute } from '../../constants';
import cls from './Header.module.scss';

export const Header: FC = () => (

    <NavLink to={AppRoute.Root} className={({ isActive }) => cn('nav-link', { [cls.active]: isActive })}>
        Главная
    </NavLink>

);
