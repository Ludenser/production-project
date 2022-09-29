import { RoutePath } from 'app/providers/router/routeConfig/RouteConfig';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

export const Navbar = () => {
    const { t } = useTranslation();
    const location = useLocation();
    return (
        <div className={classNames(cls.Navbar, {}, [])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={classNames(cls.mainLink, { [cls.current]: location.pathname === RoutePath.main }, [])}
                >
                    {t('Main-page-link')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={classNames(cls.mainLink, { [cls.current]: location.pathname === RoutePath.about }, [])}
                >
                    {t('About-page-link')}
                </AppLink>
            </div>

        </div>
    );
};
