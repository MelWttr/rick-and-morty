import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import { AppRoute } from '../../constants';

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
