import { FC } from 'react';
import cls from './Card.module.scss';
import { ICategory } from '../../pages/Category/Category';

export type Location = ICategory & {
    type: string;
    dimension: string;
};

export interface LocationProps {
    item: Location;
}

export const LocationCard: FC<LocationProps> = ({ item }) => (
    <ul>
        {item.type && (
            <li>
                Тип:
                {item.type}
            </li>

        )}
        <li>
            Измерение:
            {item.dimension}
        </li>
    </ul>

);
