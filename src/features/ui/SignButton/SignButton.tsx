import {
    FC, memo,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../model/context/AuthProvider';
import { AppRoute } from '../../../shared';

export const SignButtonComponent: FC = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const isLoggedIn: boolean = Boolean(auth?.login);

    const handleCLick = () => {
        if (isLoggedIn) {
            auth?.signOut?.(() => navigate(AppRoute.Root));
        } else {
            navigate(AppRoute.Login);
        }
    };

    return (
        <button type='button' onClick={handleCLick}>
            {isLoggedIn ? 'Выйти' : 'Войти'}
        </button>
    );
};

export const SignButton = memo(SignButtonComponent);
