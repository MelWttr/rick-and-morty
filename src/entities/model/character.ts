import { CategoryData } from './category-data';
import { PageInfo } from './info';

interface LocationReference {
    name: string;
    url: string;
}

export interface Character extends CategoryData {
    status: 'Alive' | 'Dead' | 'unknown';
    species: string;
    type: string;
    gender: 'Male' | 'Female' | 'unknown';
    origin: LocationReference;
    location: LocationReference;
    image: string;
    episode: string[];
}
export interface CharacterResponse {
    info: PageInfo;
    results: Character[];
}
