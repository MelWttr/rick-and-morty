import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../features';
import { AppRoute } from '../../shared';

interface PrivateRouteProps {
    children: ReactNode;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();

    if (!auth?.login) {
        return <Navigate to={AppRoute.Login} state={{ from: location.pathname }} replace />;
    }

    return children;
};
