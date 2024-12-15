import { FC } from 'react';
import { useParams } from 'react-router-dom';
import cls from './Detailed.module.scss';
import { Character } from '../../components/Card/CharacterCard';
import { Episode } from '../../components/Card/EpisodeCard';
import { Location } from '../../components/Card/LocationCard';
import { Layout } from '../../components/Layout/Layout';

type CardType = Character | Episode | Location;

interface CardComponentProps {
    item: CardType;
}

interface CardLayoutProps {
    items: CardType[];
    CardComponent: FC<CardComponentProps>;
}

const findItemById = (items: CardType[], id: number | undefined): CardType | undefined => {
    if (id === undefined) {
        return undefined;
    }
    return items.find((item) => item.id === id);
};

export const Detailed: FC<CardLayoutProps> = ({ items, CardComponent }) => {
    const { id } = useParams<{ id: string }>();
    const item = findItemById(items, Number(id));
    if (!item) {
        return (
            <Layout>
                <main>
                    <h1>Элемент с указанным ID не найден.</h1>
                </main>
            </Layout>
        );
    }
    return (
        <Layout>
            <main>
                <article className={cls.article}>
                    <h1>{item.name}</h1>
                    <CardComponent item={item} />
                </article>

            </main>
        </Layout>

    );
};
