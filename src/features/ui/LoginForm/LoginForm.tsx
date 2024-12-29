import {
    ChangeEvent, FC, FormEvent, memo, ReactNode, useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cls from './LoginForm.module.scss';
import { FormData, initialState } from './config';
import { useAuth } from '../../model/context/AuthProvider';
import {
    AppRoute, isObjectEmpty, Input, Email, Button, emailRegx, Errors, passwordMinLength,
} from '../../../shared';

type ValidateInput = (name: keyof FormData, value: string) => string | null;

const validateForm: ValidateInput = (name, value) => {
    if (name === 'email' && !String(value).match(emailRegx)) {
        return Errors.Email;
    }
    if (name === 'password' && value.length < passwordMinLength) {
        return Errors.Password;
    }
    return '';
};

const LoginFormComponent: FC = (): ReactNode => {
    const [formValues, setFormValue] = useState<FormData>(initialState);
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();

    const from = (location.state as { from?: string })?.from || AppRoute.Root;

    const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const name = evt.target.name as keyof FormData;
        const { value } = evt.target;
        setFormValue((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const errors = Object.entries(formValues).reduce<Partial<FormData>>((acc, [name, value]) => {
            if (!value) {
                acc[name as keyof FormData] = Errors.Empty;
            } else {
                const error = validateForm(name as keyof FormData, value);
                if (error) {
                    acc[name as keyof FormData] = error;
                }
            }
            return acc;
        }, {});

        if (!isObjectEmpty(errors)) {
            setErrors({ ...errors });
        } else {
            setErrors({});
            auth.signIn(formValues.email, () => navigate(from, { replace: true }));
            navigate(AppRoute.Root);
        }
    };

    return (
        <form className={cls.form} onSubmit={onSubmit} noValidate>
            <Input
                name='email'
                type='email'
                value={formValues.email}
                error={errors.email}
                LeftSection={Email}
                label='Введите ваш email:'
                isRequired
                focused
                onChange={onChange}
            />
            <Input
                name='password'
                type='password'
                value={formValues.password}
                error={errors.password}
                label='Введите пароль:'
                description={`Пароль должен быть не менее ${passwordMinLength} символов`}
                isRequired
                placeholder='********'
                onChange={onChange}
            />
            <Button className={cls.submit} text='Войти' type='submit' />
        </form>

    );
};

export const LoginForm = memo(LoginFormComponent);
