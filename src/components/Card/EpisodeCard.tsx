import { FC } from 'react';
import cls from './Card.module.scss';
import { ICategory } from '../../pages/Category/Category';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export type Episode = ICategory & {
    air_date: string;
    episode: string;
};

export interface EpisodeProps {
    item: Episode;
}

export const EpisodeCard: FC<EpisodeProps> = ({ item }) => (
    <ErrorBoundary>
        <ul className={cls.list}>
            <li>
                {`Дата выхода: ${item.air_date}`}
            </li>
            <li>
                {`Эпизод: ${item.episode}`}
            </li>
        </ul>
    </ErrorBoundary>
);
