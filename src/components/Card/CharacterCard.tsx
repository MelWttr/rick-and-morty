import { FC } from 'react';
import cls from './Card.module.scss';
import { ICategory } from '../../pages/Category/Category';

export type Character = ICategory & {
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
};

export interface CharacterProps {
    item: Character;
}

export const CharacterCard: FC<CharacterProps> = ({ item }) => (
    <>
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
    </>
);
