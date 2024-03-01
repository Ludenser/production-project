import { memo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    DONE = 'done',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

interface TextProps {
 className?: string;
 title?: string;
 text?: string;
 theme?: TextTheme;
 shadow?: boolean;
 align?: TextAlign;
}

export const Text = memo((props:TextProps) => {
    const {
        className,
        title,
        text,
        shadow = true,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.shadow]: shadow,
        [cls[align]]: true,
    };
    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.paragraph}>{text}</p>}
        </div>
    );
});
