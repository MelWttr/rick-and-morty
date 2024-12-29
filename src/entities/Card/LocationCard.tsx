import { FC } from 'react';
import cls from './Card.module.scss';
import { Location } from '../model/location';
import { ErrorBoundary } from '../../shared';

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
