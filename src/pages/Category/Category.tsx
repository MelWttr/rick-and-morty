import {
    JSX, useEffect, useState,
} from 'react';
import { generatePath, Link, useSearchParams } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import cls from './Category.module.scss';
import { Sort } from '../../icons/Sort';
import { Button } from '../../components/Button/Button';

export interface ICategory {
    id: number;
    name: string;
    created: string;
}

interface CategoryProps<T> {
    title: string;
    categories: T[];
    url: string;
}

type SortType = 'asc' | 'desc';

const sortCategories = <T extends ICategory>(categories: T[], type: SortType): T[] => (
    categories.sort((a, b) => {
        const dateA = new Date(a.created).getTime();
        const dateB = new Date(b.created).getTime();
        if (dateA === dateB) return 0;
        return type === 'asc' ? dateA - dateB : dateB - dateA;
    }));

export const Category = <T extends ICategory>(props: CategoryProps<T>): JSX.Element => {
    const { title, categories: categoriesFromProps, url } = props;
    const [searchParams, setSearchParams] = useSearchParams({ created: 'asc' });
    const [categories, setCategories] = useState<T[]>(categoriesFromProps);
    const created = searchParams.get('created') as SortType;

    useEffect(() => {
        setCategories(() => sortCategories([...categoriesFromProps], created as SortType));
    }, [created, categoriesFromProps]);

    const handleSortClick = (): void => {
        const newSort = created === 'asc' ? 'desc' : 'asc';
        setSearchParams({ created: newSort });
    };

    return (
        <Layout>
            <main>
                <h1 className={cls.title}>{title}</h1>
                <div className={cls.options}>
                    <Button onClick={handleSortClick} text='Дата создания'>
                        <Sort />
                    </Button>
                </div>
                <ul className={cls.container}>
                    {categories.map((category: T) => (
                        <li key={category.id} className={cls.item}>
                            <Link
                                key={category.id}
                                to={generatePath(url, { id: category.id.toString() })}
                            >
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </Layout>
    );
};
