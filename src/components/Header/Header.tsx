import { FC, memo, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { AppRoute } from '../../constants';
import cls from './Header.module.scss';
import { SignButton } from '../SignButton/SignButton';

const getLinkClassname = ({ isActive }: { isActive: boolean }): string => cn('nav-link', { [cls.active]: isActive });

export const Header: FC = memo(() => {
    const location = useLocation();
    const currentPath = useMemo(() => location.pathname, [location.pathname]);

    return (
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
                {currentPath === AppRoute.Root && <SignButton />}
            </nav>
        </header>
    );
});
