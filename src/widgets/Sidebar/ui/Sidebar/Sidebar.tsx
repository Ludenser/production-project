import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import Expand from 'shared/assets/icons/expand-right.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/router/routeConfig/RouteConfig';
import { useTranslation } from 'react-i18next';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/home.svg';
import { useLocation } from 'react-router-dom';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { t } = useTranslation();
    const location = useLocation();
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
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
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

                <AppLink
                    current
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon className={classNames(
                        cls.icon,
                        { [cls.current]: location.pathname === RoutePath.about },
                        [],
                    )}
                    />
                    <span className={cls.link}>
                        {t('About-page-link')}
                    </span>
                </AppLink>

            </div>

            <div className={classNames(cls.switchers, {}, [])}>
                <ThemeSwitcher className={classNames('', { [cls.themeSwitcher]: collapsed }, [])} />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
