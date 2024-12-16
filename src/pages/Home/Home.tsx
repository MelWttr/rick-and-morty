import { FC, memo } from 'react';
import { Layout } from '../../components/Layout/Layout';
import cls from './Home.module.scss';

export const Home: FC = memo(() => (
    <Layout>
        <main className={cls.container}>
            <h1 className={cls.title}>Будь как дома, путник</h1>
        </main>
    </Layout>
));
