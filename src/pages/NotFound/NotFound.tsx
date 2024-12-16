import { FC, memo } from 'react';
import { Layout } from '../../components/Layout/Layout';
import cls from './NotFound.module.scss';

export const NotFound: FC = memo(() => (
    <Layout>
        <main className={cls.container}>
            <h1 className={cls.title}>Страница не найдена</h1>
        </main>
    </Layout>
));
