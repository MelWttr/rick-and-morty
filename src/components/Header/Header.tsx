import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { AppRoute, CategoryKind } from '../../constants';
import cls from './Header.module.scss';

const getLinkClassname = ({ isActive }: { isActive: boolean }): string => cn('nav-link', { [cls.active]: isActive });

export const Header: FC = memo(() => (
    <header className={cls.header}>
        <nav className={cls.nav}>
            <ul className={cls['nav-list']}>
                <li className={cls['nav-item']}>
                    <NavLink to={AppRoute.Root} className={getLinkClassname}>
                        Главная
                    </NavLink>
                </li>
                <li className={cls['nav-item']}>
                    <NavLink
                        to={AppRoute.Category(CategoryKind.Characters)}
                        className={getLinkClassname}
                    >
                        Персонажи
                    </NavLink>
                </li>
                <li className={cls['nav-item']}>
                    <NavLink
                        to={AppRoute.Category(CategoryKind.Locations)}
                        className={getLinkClassname}
                    >
                        Расположение
                    </NavLink>
                </li>
                <li className={cls['nav-item']}>
                    <NavLink
                        to={AppRoute.Category(CategoryKind.Episodes)}
                        className={getLinkClassname}
                    >
                        Эпизоды
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
));
