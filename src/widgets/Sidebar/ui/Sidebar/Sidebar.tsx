import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import Expand from 'shared/assets/icons/expand-right.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);
    const {
        className,
        ...otherProps
    } = props;

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
            {...otherProps}
        >
            <div className={cls.icon_container}>
                <Button
                    theme={ThemeButton.CLEAR}
                    onClick={onToggle}
                >
                    <Expand
                        className={classNames(cls.expand_icon, { [cls.collapsed_icon]: !collapsed }, [])}
                    />
                </Button>
            </div>

            <div className={classNames(cls.switchers, { [cls.switchers_collapsed]: collapsed }, [])}>
                <ThemeSwitcher className={classNames('', { [cls.themeSwitcher]: collapsed }, [])} />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
