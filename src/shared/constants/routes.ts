export const AppRoute = {
    Root: '/',
    Login: '/login',
    Categories: '/categories',
    Characters: '/categories/characters',
    Episodes: '/categories/episodes',
    Locations: '/categories/locations',
    Character: '/character/:id',
    Episode: '/episode/:id',
    Location: '/location/:id',
    NotFound: '*',
} as const;
