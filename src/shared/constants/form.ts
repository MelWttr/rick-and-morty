export const passwordMinLength = 8;
export const emailRegx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;
export const Errors = {
    Email: 'Некорректный email',
    Password: `Пароль не должен быть меньше ${passwordMinLength} символов`,
    Empty: 'Поле обязательно',
} as const;
