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
import { Login } from './pages/Login/Login';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { AuthProvider } from './context/AuthProvider';

export function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path={AppRoute.Root} element={<Home />} />
                <Route path={AppRoute.Login} element={<Login />} />
                <Route path={AppRoute.Categories}>
                    <Route
                        path={AppRoute.Characters}
                        element={(
                            <PrivateRoute>
                                <Category title='Персонажи' categories={characters} url={AppRoute.Character} />
                            </PrivateRoute>
                        )}
                    />
                    <Route
                        path={AppRoute.Episodes}
                        element={(
                            <PrivateRoute>
                                <Category title='Эпизоды' categories={episode} url={AppRoute.Episode} />
                            </PrivateRoute>
                        )}
                    />
                    <Route
                        path={AppRoute.Locations}
                        element={(
                            <PrivateRoute>
                                <Category title='Локации' categories={location} url={AppRoute.Location} />
                            </PrivateRoute>
                        )}
                    />
                </Route>

                <Route
                    path={AppRoute.Character}
                    element={(
                        <PrivateRoute>
                            <Detailed items={characters} CardComponent={CharacterCard} />
                        </PrivateRoute>
                    )}
                />
                <Route
                    path={AppRoute.Episode}
                    element={(
                        <PrivateRoute>
                            <Detailed items={episode} CardComponent={EpisodeCard} />
                        </PrivateRoute>
                    )}
                />
                <Route
                    path={AppRoute.Location}
                    element={(
                        <PrivateRoute>
                            <Detailed items={location} CardComponent={LocationCard} />
                        </PrivateRoute>
                    )}
                />
                <Route path={AppRoute.NotFound} element={<NotFound />} />
            </Routes>

        </AuthProvider>
    );
}
