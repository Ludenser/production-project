import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    DONE = 'done',
}

interface TextProps {
 className?: string;
 title?: string;
 text?: string;
 theme?: TextTheme;
 shadow?: boolean;
}

export const Text = (props:TextProps) => {
    const {
        className,
        title,
        text,
        shadow = true,
        theme = TextTheme.PRIMARY,
    } = props;
    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true, [cls.shadow]: shadow }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.paragraph}>{text}</p>}
        </div>
    );
};
