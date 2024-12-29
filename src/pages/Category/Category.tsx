import {
    JSX, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import cls from './Category.module.scss';
import {
    Loader, ErrorBoundary, Sort, Button, apiUrls,
} from '../../shared';
import {
    CategoryType, useGetData, LocationResponse, CharacterResponse, EpisodeResponse, ItemsList,
} from '../../entities';

interface CategoryProps {
    title: string;
    url: string;
    getDataUrl: (typeof apiUrls)[keyof typeof apiUrls];
}

type SortType = 'asc' | 'desc';

const sortCategories = (categories: CategoryType[], type: SortType): CategoryType[] => (
    [...categories].sort((a, b) => {
        const dateA = new Date(a.created).getTime();
        const dateB = new Date(b.created).getTime();
        if (dateA === dateB) return 0;
        return type === 'asc' ? dateA - dateB : dateB - dateA;
    }));

export const Category = (props: CategoryProps): JSX.Element => {
    const { title, url, getDataUrl } = props;
    const [searchParams, setSearchParams] = useSearchParams({ created: 'asc' });
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const created = searchParams.get('created') as SortType;
    const { data, loading } = useGetData<LocationResponse | CharacterResponse | EpisodeResponse>({
        url: getDataUrl,
        page: pageNumber,
    });
    const observer = useRef<IntersectionObserver | null>(null);
    const lastItemRef = useCallback((node: HTMLLIElement | null) => {
        if (loading) return;
        if (observer.current) {
            observer.current.disconnect();
        }
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber((prev) => prev + 1);
            }
        });
        if (node) {
            observer.current.observe(node);
        }
    }, [loading, hasMore]);

    useEffect(() => {
        if (data?.results) {
            const newCategories = data.results as unknown as CategoryType[];
            setCategories((prev) => {
                const newData = newCategories.filter((item) => !prev.some((existing) => existing.id === item.id));
                return [...prev, ...newData];
            });
        }
        if (data?.info) {
            setHasMore(Boolean(data.info.next));
        }
    }, [data]);

    const handleSortClick = (): void => {
        const newSort = created === 'asc' ? 'desc' : 'asc';
        setSearchParams({ created: newSort });
    };

    const sortedCategories = useMemo(() => sortCategories(categories, created), [categories, created]);

    return (
        <main>
            <h1 className={cls.title}>{title}</h1>
            <div className={cls.options}>
                <Button onClick={handleSortClick} text='Дата создания'>
                    <Sort />
                </Button>
            </div>
            <ErrorBoundary>
                <ItemsList
                    ref={lastItemRef}
                    items={sortedCategories}
                    url={url}
                />
            </ErrorBoundary>
            {loading && <Loader />}
        </main>
    );
};
