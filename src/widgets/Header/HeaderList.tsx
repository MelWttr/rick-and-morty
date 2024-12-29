import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { AppRoute } from '../../shared';
import cls from './Header.module.scss';

const getLinkClassname = ({ isActive }: { isActive: boolean }): string => cn('nav-link', { [cls.active]: isActive });

export const HeaderList: FC = memo(() => (

    <ul className={cls['nav-list']}>
        <li className={cls['nav-item']}>
            <NavLink to={AppRoute.Root} className={getLinkClassname}>
                Главная
            </NavLink>
        </li>
        <li className={cls['nav-item']}>
            <NavLink
                to={AppRoute.Characters}
                className={getLinkClassname}
            >
                Персонажи
            </NavLink>
        </li>
        <li className={cls['nav-item']}>
            <NavLink
                to={AppRoute.Locations}
                className={getLinkClassname}
            >
                Расположение
            </NavLink>
        </li>
        <li className={cls['nav-item']}>
            <NavLink
                to={AppRoute.Episodes}
                className={getLinkClassname}
            >
                Эпизоды
            </NavLink>
        </li>
    </ul>
));
