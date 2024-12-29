import { FC, memo } from 'react';
import cls from './Login.module.scss';
import { LoginForm } from '../../features';

const LoginComponent: FC = () => (
    <main className={cls.container}>
        <h1 className={cls.title}>Введите данные для входа:</h1>
        <LoginForm />
    </main>
);

export const Login = memo(LoginComponent);
