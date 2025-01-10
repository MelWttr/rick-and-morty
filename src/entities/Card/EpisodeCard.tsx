import { FC } from 'react';
import cls from './Card.module.scss';
import { ErrorBoundary } from '../../shared';
import { Episode } from '../model/episode';

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
