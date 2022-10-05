import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTheme } from 'shared/contexts';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Theme } from 'shared/contexts/index';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            hover
        >
            {theme === Theme.LIGHT ? <DarkIcon className={cls.svgShadow} /> : <LightIcon className={cls.svgShadow} />}
        </Button>
    );
};
