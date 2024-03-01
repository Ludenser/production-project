import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Expand from 'shared/assets/icons/expand-right.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import { SidebarItem } from './SidenarItem/SidebarItem';
import { SidebarItemsList } from './model/items';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const {
        ...otherProps
    } = props;

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [])}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        >
            <div className={cls.iconContainer}>
                <Button
                    data-testid="sidebar-toggle"
                    theme={ButtonTheme.CLEAR}
                    onClick={onToggle}
                    hover
                >
                    <Expand
                        className={cls.expandIcon}
                    />
                </Button>
            </div>
            <div className={cls.items}>

                {SidebarItemsList(t).map((item) => (
                    <SidebarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />
                ))}

            </div>

            <div className={classNames(cls.switchers, {}, [])}>
                <ThemeSwitcher className={classNames('', { [cls.themeSwitcher]: collapsed }, [])} />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
});
