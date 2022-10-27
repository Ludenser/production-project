/* eslint-disable i18next/no-literal-string */
import { RoutePath } from 'app/providers/router/routeConfig/RouteConfig';
import { LoginModal } from 'feauters/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

export const Navbar = () => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [])}>
            <div className={cls.links}>

                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    current
                    className={cls.mainLink}
                >
                    {t('Main-page-link')}
                </AppLink>
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onShowModal}
                    hover
                >
                    {t('Log in')}
                </Button>
            </div>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
};
