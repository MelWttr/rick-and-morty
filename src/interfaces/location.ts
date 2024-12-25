import { CategoryData } from './category';
import { PageInfo } from './info';

export interface Location extends CategoryData {
    type: string;
    dimension: string;
    residents: string[];
}

export interface LocationResponse {
    info: PageInfo,
    results: Location[],
}
