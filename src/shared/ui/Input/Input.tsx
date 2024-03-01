/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
    ChangeEvent,
    InputHTMLAttributes, memo,
} from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

interface InputProps extends HTMLInputProps {
    label?:string;
    className?: string;
    value?: string | number;
    onChange?: (value:string)=> void;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        label,
        required,
        readonly,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.hasValue]: value !== '',
    };
    return (
        <div
            className={classNames(cls.InputWrapper, {}, [className])}
        >

            <input
                required={required}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={classNames(cls.Input, mods)}
                readOnly={readonly}
                {...otherProps}
            />
            <label
                className={cls.label}
            >
                {label}
            </label>
        </div>
    );
});
