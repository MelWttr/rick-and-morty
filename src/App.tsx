import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { apiUrls, AppRoute } from './constants';
import characters from './data/characters.json';
import episode from './data/episode.json';
import location from './data/location.json';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { AuthProvider } from './context/AuthProvider';
import { Layout } from './components/Layout/Layout';
import { Loader } from './components/Loader/Loader';

const Home = lazy(() => import('./pages/Home/Home').then((module) => ({ default: module.Home })));
const Login = lazy(() => import('./pages/Login/Login').then((module) => ({ default: module.Login })));
const Detailed = lazy(() => import('./pages/Detailed/Detailed').then((module) => ({ default: module.Detailed })));
const Category = lazy(() => import('./pages/Category/Category').then((module) => ({ default: module.Category })));
const NotFound = lazy(() => import('./pages/NotFound/NotFound').then((module) => ({ default: module.NotFound })));
const CharacterCard = lazy(() => import('./components/Card/CharacterCard')
    .then((module) => ({ default: module.CharacterCard })));
const EpisodeCard = lazy(() => import('./components/Card/EpisodeCard')
    .then((module) => ({ default: module.EpisodeCard })));
const LocationCard = lazy(() => import('./components/Card/LocationCard')
    .then((module) => ({ default: module.LocationCard })));

export function App() {
    return (
        <AuthProvider>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path={AppRoute.Root} element={<Home />} />
                        <Route path={AppRoute.Login} element={<Login />} />
                        <Route path={AppRoute.Categories}>
                            <Route
                                path={AppRoute.Characters}
                                element={(
                                    <PrivateRoute>
                                        <Category
                                            title='Персонажи'
                                            getDataUrl={apiUrls.character}
                                            url={AppRoute.Character}
                                        />
                                    </PrivateRoute>
                                )}
                            />
                            <Route
                                path={AppRoute.Episodes}
                                element={(
                                    <PrivateRoute>
                                        <Category title='Эпизоды' getDataUrl={apiUrls.episode} url={AppRoute.Episode} />
                                    </PrivateRoute>
                                )}
                            />
                            <Route
                                path={AppRoute.Locations}
                                element={(
                                    <PrivateRoute>
                                        <Category
                                            title='Локации'
                                            getDataUrl={apiUrls.location}
                                            url={AppRoute.Location}
                                        />
                                    </PrivateRoute>
                                )}
                            />
                        </Route>

                        <Route
                            path={AppRoute.Character}
                            element={(
                                <PrivateRoute>
                                    <Detailed url={apiUrls.character} CardComponent={CharacterCard} />
                                </PrivateRoute>
                            )}
                        />
                        <Route
                            path={AppRoute.Episode}
                            element={(
                                <PrivateRoute>
                                    <Detailed url={apiUrls.episode} CardComponent={EpisodeCard} />
                                </PrivateRoute>
                            )}
                        />
                        <Route
                            path={AppRoute.Location}
                            element={(
                                <PrivateRoute>
                                    <Detailed url={apiUrls.location} CardComponent={LocationCard} />
                                </PrivateRoute>
                            )}
                        />
                        <Route path={AppRoute.NotFound} element={<NotFound />} />
                    </Route>
                </Routes>
            </Suspense>
        </AuthProvider>
    );
}
