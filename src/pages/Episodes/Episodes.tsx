import { FC } from 'react';
import episodes from '../../data/episode.json';
import { Category } from '../Category/Category';
import { AppRoute, DetailedKind } from '../../constants';

export const Episodes: FC = () => (
    <Category title='Эпизоды' categories={episodes} url={AppRoute.Detailed(DetailedKind.Episode)} />
);
