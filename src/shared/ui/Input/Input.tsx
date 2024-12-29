import {
    useEffect, useRef, FC, CSSProperties, ChangeEvent,
    InputHTMLAttributes,
} from 'react';
import cn from 'classnames';
import cls from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    isRequired?: boolean;
    disabled?: boolean;
    description?: string;
    placeholder?: string;
    LeftSection?: FC<{ style?: CSSProperties }>;
    RightSection?: FC<{ style?: CSSProperties }>;
    error?: string;
    focused?: boolean;
    type?: string;
    viewType?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = (props) => {
    const {
        name,
        onChange,
        label,
        isRequired,
        disabled,
        value,
        description,
        placeholder,
        LeftSection,
        RightSection,
        error,
        focused,
        type = 'text',
        viewType,
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const input = inputRef.current;

        if (input) {
            if (focused) {
                input.focus();
            }
            if (LeftSection) {
                input.style.setProperty('padding-left', 'calc(var(--input-padding) * 2)');
                document.documentElement.style.setProperty(
                    '--input-left-section-size',
                    'var(--input-padding * 2.5)',
                );
            }
            if (RightSection) {
                input.style.setProperty('padding-right', 'calc(var(--input-padding}) * 2)');
                document.documentElement.style.setProperty(
                    '--input-right-section-size',
                    'var(--input-padding * 2.5)',
                );
            }
        }
    }, [focused, LeftSection, RightSection]);

    return (
        <div className={cn(cls.container)}>
            {label && (
                <label className={cls.label} htmlFor={name}>
                    {label}
                    {isRequired && <span className={cls.required}> *</span>}
                </label>
            )}
            {description && <p className={cls.description}>{description}</p>}
            <div className={cn(cls.wrapper, { [cls.error]: Boolean(error) })}>
                {LeftSection && (
                    <div className={cn(cls.icon, cls.left)}>
                        <LeftSection />
                    </div>
                )}
                {RightSection && (
                    <div className={cn(cls.icon, cls.right)}>
                        <RightSection />
                    </div>
                )}
                <input
                    ref={inputRef}
                    onChange={onChange}
                    disabled={disabled}
                    value={value}
                    id={name}
                    name={name}
                    className={cn(cls.input, cls[viewType], {
                        [cls.error]: !!error,
                        [cls[viewType]]: !!viewType,
                        [cls.disabled]: disabled,
                    })}
                    type={type}
                    required={isRequired}
                    placeholder={placeholder}
                />
            </div>
            {error && <p className={cls['error-text']}>{error}</p>}
        </div>
    );
};
