import { FC } from 'react';
import locations from '../../data/location.json';
import { Category } from '../Category/Category';
import { AppRoute, DetailedKind } from '../../constants';

export const Locations: FC = () => (
    <Category title='Локации' categories={locations} url={AppRoute.Detailed(DetailedKind.Location)} />
);
