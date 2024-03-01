import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const location = useLocation();

    return (
        <AppLink
            current
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={classNames(
                cls.icon,
                { [cls.current]: location.pathname === item.path },
                [],
            )}
            />
            <span className={cls.link}>
                {item.text}
            </span>
        </AppLink>
    );
});
