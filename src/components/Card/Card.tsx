import { FC } from 'react';
import cls from './Card.module.scss';
import { ICategory } from '../../pages/Category/Category';
import { CategoryKind, DetailedKind } from '../../constants';

type Character = ICategory & {
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
};

type Episode = ICategory & {
    air_date: string;
    episode: string;
};

type Location = ICategory & {
    type: string;
    dimension: string;
};

export type CardType = Character | Episode | Location;

export interface CardProps {
    kind: (typeof DetailedKind)[keyof typeof DetailedKind];
    item: CardType;
}

export const Card: FC<CardProps> = ({ kind, item }) => {
    return (
        <article className={cls.card}>
            <h1>{item.name}</h1>
            {kind === DetailedKind.Character && (
                <>
                    {item.image && <img className={cls.image} src={item.image} alt={item.name} />}
                    <p>
                        Статус:
                        {item.status}
                    </p>
                    <p>
                        Вид:
                        {item.species}
                    </p>
                    <p>
                        Пол:
                        {item.gender}
                    </p>
                    {item.type && (
                        <p>
                            Тип:
                            {item.type}
                        </p>
                    )}
                </>
            )}

            {kind === DetailedKind.Episode && (
                <>
                    <p>
                        Дата выхода:
                        {item.air_date}
                    </p>
                    <p>
                        Эпизод:
                        {item.episode}
                    </p>
                </>
            )}

            {kind === DetailedKind.Location && (
                <>
                    <p>
                        Тип:
                        {item.type}
                    </p>
                    <p>
                        Измерение:
                        {item.dimension}
                    </p>
                </>
            )}
        </article>
    );
};
