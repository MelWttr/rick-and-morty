const baseUrl = 'https://rickandmortyapi.com/api/';

export const apiUrls = {
    character: `${baseUrl}character`,
    location: `${baseUrl}location`,
    episode: `${baseUrl}episode`,
} as const;
