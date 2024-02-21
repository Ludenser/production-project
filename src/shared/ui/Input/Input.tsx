/* eslint-disable jsx-a11y/label-has-associated-control */
import {
    ChangeEvent,
    InputHTMLAttributes, memo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    label:string;
    className?: string;
    value?: string;
    onChange?: (value:string)=> void;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        label,
        required,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <div
            className={classNames(cls.InputWrapper, {}, [className])}
        >

            <input
                required
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.Input}
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
