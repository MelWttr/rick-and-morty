import { FC, memo } from 'react';
import cls from './NotFound.module.scss';

export const NotFound: FC = memo(() => (
    <main className={cls.container}>
        <h1 className={cls.title}>Страница не найдена</h1>
    </main>
));
