import { CategoryData } from './category-data';
import { PageInfo } from './info';

export interface Episode extends CategoryData {
    air_date: string; // Дата выхода
    episode: string; // Код эпизода (например, "S01E01")
    characters: string[]; // Массив ссылок на персонажей
}
export interface EpisodeResponse {
    info: PageInfo; // Метаданные пагинации
    results: Episode[]; // Массив эпизодов
}
