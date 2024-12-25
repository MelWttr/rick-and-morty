import { FC } from 'react';
import { useParams } from 'react-router-dom';
import cls from './Detailed.module.scss';
import { Location } from '../../interfaces/location';
import { Character } from '../../interfaces/character';
import { Episode } from '../../interfaces/episode';
import { useGetData } from '../../hooks/useGetData';
import { Loader } from '../../components/Loader/Loader';

type CardType = Character | Episode | Location;

interface CardComponentProps {
    item: CardType;
}

interface CardLayoutProps {
    url: string;
    CardComponent: FC<CardComponentProps>;
}

const findItemById = (items: CardType[], id: number | undefined): CardType | undefined => {
    if (id === undefined) {
        return undefined;
    }
    return items.find((item) => item.id === id);
};

export const Detailed: FC<CardLayoutProps> = ({ url, CardComponent }) => {
    const { id } = useParams<{ id: string }>();

    const { data, loading } = useGetData<Location | Character | Episode>({
        url: `${url}/${id}`,
    });

    if (!data) {
        return (
            <main>
                <h1>Элемент с указанным ID не найден.</h1>
            </main>
        );
    }
    return (
        <main className={cls.container}>
            {
                loading
                    ? <Loader />
                    : (
                        <article className={cls.article}>
                            <h1 className={cls.title}>{data.name}</h1>
                            <CardComponent item={data} />
                        </article>
                    )
            }

        </main>

    );
};
