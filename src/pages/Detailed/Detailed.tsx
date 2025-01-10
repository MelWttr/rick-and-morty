import { FC } from 'react';
import { useParams } from 'react-router-dom';
import cls from './Detailed.module.scss';
import {
    useGetData, Location, Character, Episode,
} from '../../entities';
import { Loader } from '../../shared';

type CardType = Character | Episode | Location;

interface CardComponentProps {
    item: CardType;
}

interface CardLayoutProps {
    url: string;
    CardComponent: FC<CardComponentProps>;
}

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
