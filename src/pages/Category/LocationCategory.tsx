import { apiUrls, AppRoute } from '../../shared';
import { Category } from './Category';

export const LocationCategory = () => (
    <Category
        title='Локации'
        getDataUrl={apiUrls.location}
        url={AppRoute.Location}
    />
);
