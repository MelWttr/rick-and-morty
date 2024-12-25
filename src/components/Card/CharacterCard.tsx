import { FC } from 'react';
import cls from './Card.module.scss';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { Character } from '../../interfaces/character';

export interface CharacterProps {
    item: Character;
}

export const CharacterCard: FC<CharacterProps> = ({ item }) => (
    <ErrorBoundary>
        {item.image && <img className={cls.image} src={item.image} alt={item.name} />}
        <ul className={cls.list}>
            <li>
                {`Статус: ${item.status}`}
            </li>
            <li>
                {`Вид: ${item.species}`}
            </li>
            <li>
                {`Пол: ${item.gender}`}
            </li>
            {item.type && (
                <li>
                    {`Тип: ${item.type}`}
                </li>
            )}
        </ul>
    </ErrorBoundary>
);
