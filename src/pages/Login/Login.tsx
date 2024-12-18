import { FC, memo } from 'react';
import { Layout } from '../../components/Layout/Layout';
import cls from './Login.module.scss';
import { LoginForm } from '../../components/LoginForm/LoginForm';

const LoginComponent: FC = () => (
    <Layout>
        <main className={cls.container}>
            <h1 className={cls.title}>Введите данные для входа:</h1>
            <LoginForm />
        </main>
    </Layout>
);

export const Login = memo(LoginComponent);
