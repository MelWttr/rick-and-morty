import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { AppRoute } from './constants';
import characters from './data/characters.json';
import episode from './data/episode.json';
import location from './data/location.json';
import { CharacterCard } from './components/Card/CharacterCard';
import { EpisodeCard } from './components/Card/EpisodeCard';
import { LocationCard } from './components/Card/LocationCard';
import { Detailed } from './pages/Detailed/Detailed';
import { Category } from './pages/Category/Category';
import { NotFound } from './pages/NotFound/NotFound';

export function App() {
    return (
        <Routes>
            <Route path={AppRoute.Root} element={<Home />} />
            <Route path={AppRoute.Categories}>
                <Route
                    path={AppRoute.Characters}
                    element={<Category title="Персонажи" categories={characters} url={AppRoute.Character} />}
                />
                <Route
                    path={AppRoute.Episodes}
                    element={<Category title="Эпизоды" categories={episode} url={AppRoute.Episode} />}
                />
                <Route
                    path={AppRoute.Locations}
                    element={<Category title="Локации" categories={location} url={AppRoute.Location} />}
                />
            </Route>

            <Route path={AppRoute.Character} element={<Detailed items={characters} CardComponent={CharacterCard} />} />
            <Route path={AppRoute.Episode} element={<Detailed items={episode} CardComponent={EpisodeCard} />} />
            <Route path={AppRoute.Location} element={<Detailed items={location} CardComponent={LocationCard} />} />
            <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Routes>
    );
}
