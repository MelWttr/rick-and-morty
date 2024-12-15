import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import { Card, CardProps, CardType } from '../../components/Card/Card';
import { DetailedKind } from '../../constants';

interface DetailedProps {
    items: CardType[];
    kind: typeof DetailedKind[keyof typeof DetailedKind];
}

const findItemById = <T extends CardType >(items: T[], id: number | undefined): T => {
    if (id === undefined) { return undefined; }
    return items.find((item) => item.id === id);
};

const DetailedComponent: FC<DetailedProps> = ({ items, kind }) => {
    const { id } = useParams<{ id: string }>();
    console.log(id);
    
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
                <Card kind={kind} item={item} />
            </main>
        </Layout>
    );
};

export const Detailed = memo(DetailedComponent);
