import { FC, memo, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { AppRoute } from '../../constants';
import cls from './Header.module.scss';
import { SignButton } from '../SignButton/SignButton';
import { HeaderList } from './HeaderList';

// const getLinkClassname = ({ isActive }: { isActive: boolean }): string => cn('nav-link', { [cls.active]: isActive });

export const Header: FC = memo(() => {
    const location = useLocation();
    const currentPath = useMemo(() => location.pathname, [location.pathname]);

    return (
        <header className={cls.header}>
            <nav className={cls.nav}>
                <HeaderList />
                {currentPath === AppRoute.Root && <SignButton />}
            </nav>
        </header>
    );
});
