export interface PageInfo {
    count: number; // Общее количество эпизодов
    pages: number; // Общее количество страниц
    next: string | null; // URL следующей страницы или null
    prev: string | null; // URL предыдущей страницы или null
}
