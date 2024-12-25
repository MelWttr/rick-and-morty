import { FC } from 'react';
import cls from './Card.module.scss';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { Location } from '../../interfaces/location';

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
