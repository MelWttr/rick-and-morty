import { apiUrls, AppRoute } from '../../shared';
import { Category } from './Category';

export const EpisodeCategory = () => (
    <Category
        title='Эпизоды'
        getDataUrl={apiUrls.episode}
        url={AppRoute.Episode}
    />
);
