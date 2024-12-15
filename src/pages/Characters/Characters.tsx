import { FC } from 'react';
import characters from '../../data/characters.json';
import { Category } from '../Category/Category';
import { AppRoute, DetailedKind } from '../../constants';

export const Characters: FC = () => (
    <Category title='Персонажи' categories={characters} url={AppRoute.Detailed(DetailedKind.Character)} />
);
