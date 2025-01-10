import { apiUrls, AppRoute } from '../../shared';
import { Category } from './Category';

export const CharacterCategory = () => (
    <Category
        title='Персонажи'
        getDataUrl={apiUrls.character}
        url={AppRoute.Character}
    />
);
