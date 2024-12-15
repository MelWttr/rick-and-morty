export const DetailedKind = {
    Character: 'character',
    Episode: 'episode',
    Location: 'location',
} as const;

export const CategoryKind = {
    Characters: 'characters',
    Episodes: 'episodes',
    Locations: 'locations',
} as const;

export const AppRoute = {
    Root: '/',
    Categories: '/categories',
    Category: (category: string): string => `/categories/${category}`,
    Detailed: (category: string): string => `/${category}/:id`,
    NotFound: '/not-found',
} as const;
