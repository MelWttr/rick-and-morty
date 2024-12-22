import { FC } from 'react';
import cls from './Card.module.scss';
import { ICategory } from '../../pages/Category/Category';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export type Location = ICategory & {
    type: string;
    dimension: string;
};

export interface LocationProps {
    item: Location;
}

export const LocationCard: FC<LocationProps> = ({ item }) => (
    <ErrorBoundary>
        <ul className={cls.list}>
            {item.type && (
                <li>
                    {`Тип: ${item.type}`}
                </li>
            )}
            <li>
                {`Измерение: ${item.dimension}`}
            </li>
        </ul>
    </ErrorBoundary>

);
