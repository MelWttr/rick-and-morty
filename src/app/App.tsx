import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { Layout } from './Layout/Layout';
import { Loader, AppRoute, apiUrls } from '../shared';
import { AuthProvider } from '../features';

const Home = lazy(() => import('../pages/Home/Home').then((module) => ({ default: module.Home })));
const Login = lazy(() => import('../pages/Login/Login').then((module) => ({ default: module.Login })));
const Detailed = lazy(() => import('../pages/Detailed/Detailed').then((module) => ({ default: module.Detailed })));
const CharacterCategory = lazy(() => import('../pages/Category/CharacterCategory')
    .then((module) => ({ default: module.CharacterCategory })));
const EpisodeCategory = lazy(() => import('../pages/Category/EpisodeCategory')
    .then((module) => ({ default: module.EpisodeCategory })));
const LocationCategory = lazy(() => import('../pages/Category/LocationCategory')
    .then((module) => ({ default: module.LocationCategory })));
const NotFound = lazy(() => import('../pages/NotFound/NotFound').then((module) => ({ default: module.NotFound })));
const CharacterCard = lazy(() => import('../entities/Card/CharacterCard')
    .then((module) => ({ default: module.CharacterCard })));
const EpisodeCard = lazy(() => import('../entities/Card/EpisodeCard')
    .then((module) => ({ default: module.EpisodeCard })));
const LocationCard = lazy(() => import('../entities/Card/LocationCard')
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
                                        <CharacterCategory />
                                    </PrivateRoute>
                                )}
                            />
                            <Route
                                path={AppRoute.Episodes}
                                element={(
                                    <PrivateRoute>
                                        <EpisodeCategory />
                                    </PrivateRoute>
                                )}
                            />
                            <Route
                                path={AppRoute.Locations}
                                element={(
                                    <PrivateRoute>
                                        <LocationCategory />
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
