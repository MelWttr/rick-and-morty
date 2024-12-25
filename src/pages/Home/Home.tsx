import { FC, memo } from 'react';
import cls from './Home.module.scss';

export const Home: FC = memo(() => (
    <main className={cls.container}>
        <h1 className={cls.title}>Будь как дома, путник</h1>
    </main>

));
