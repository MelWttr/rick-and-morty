import { useEffect, useState } from 'react';
import axios, { CancelTokenSource } from 'axios';

export interface UseGetDataParams {
    url: string;
    query?: string,
    page?: number,
}

interface UseGetDataReturn<T> {
    data: T | null;
    error: Error | null;
    loading: boolean;
}

export const useGetData = <T>({ url, page, query }: UseGetDataParams):UseGetDataReturn<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get<T>(url, {
                    params: {
                        page,
                        query,
                    },
                });
                setData(response.data);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, query, page]);

    return { data, error, loading };
};
