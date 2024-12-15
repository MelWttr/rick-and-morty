import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { AppRoute, CategoryKind, DetailedKind } from './constants';
import { Characters } from './pages/Characters/Characters';
import { Episodes } from './pages/Episodes/Episodes';
import { Locations } from './pages/Locations/Locations';
import { Detailed } from './pages/Detailed/Detailed';
import characters from './data/characters.json';
import episode from './data/episode.json';
import location from './data/location.json';
import { CardProps } from './components/Card/Card';

export function App() {
    return (
        <Routes>
            <Route path={AppRoute.Root} element={<Home />} />
            <Route path={AppRoute.Categories}>
                <Route path={AppRoute.Category(CategoryKind.Characters)} element={<Characters />} />
                <Route path={AppRoute.Category(CategoryKind.Episodes)} element={<Episodes />} />
                <Route path={AppRoute.Category(CategoryKind.Locations)} element={<Locations />} />
            </Route>

            <Route
                path={AppRoute.Detailed(DetailedKind.Character)}
                element={<Detailed items={characters as CardProps[]} kind={DetailedKind.Character} />}
            />
            <Route
                path={AppRoute.Category(DetailedKind.Episode)}
                element={<Detailed items={episode as CardProps[]} kind={DetailedKind.Episode} />}
            />
            <Route
                path={AppRoute.Category(DetailedKind.Location)}
                element={<Detailed items={location as CardProps[]} kind={DetailedKind.Location} />}
            />
        </Routes>
    );
}
