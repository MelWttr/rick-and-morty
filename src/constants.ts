export const passwordMinLength = 8;
export const emailRegx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;

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

export const Errors = {
    Email: 'Некорректный email',
    Password: `Пароль не должен быть меньше ${passwordMinLength} символов`,
    Empty: 'Поле обязательно',
} as const;

const baseUrl = 'https://rickandmortyapi.com/api/';

export const apiUrls = {
    character: `${baseUrl}character`,
    location: `${baseUrl}location`,
    episode: `${baseUrl}episode`,
} as const;
