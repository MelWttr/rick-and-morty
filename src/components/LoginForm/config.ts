import { InputProps } from '../Input/Input';

export type FormData = {
    password: string;
    email: string;
  };

type Config = (InputProps & {
  validate?: (error: FormData) => string;
  name: keyof FormData;
})[];

export const config: Config = [
    {
        name: 'email',
        placeholder: 'E-mail',
        type: 'email',
        required: true,
        validate: (error: FormData) => (error.email ? error.email : ''),
    },
    {
        name: 'password',
        placeholder: 'Пароль',
        required: true,
        type: 'password',
        minLength: 6,
        validate: (error: FormData) => (error.password ? error.password : ''),
    },
];

export const initialState: FormData = {
    password: '',
    email: '',
};
