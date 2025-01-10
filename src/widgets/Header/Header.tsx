import { FC, memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../shared';
import cls from './Header.module.scss';
import { HeaderList } from './HeaderList';
import { SignButton } from '../../features';

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
