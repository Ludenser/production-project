/* eslint-disable i18next/no-literal-string */
import { RoutePath } from 'app/providers/router/routeConfig/RouteConfig';
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'feauters/AuthByUsername';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

export const Navbar = () => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);
    const [showModalDelayed, setShowModalDelayed] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        setIsAuthModal(false);
        dispatch(userActions.logout());
    }, [dispatch]);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        if (authData) {
            setShowModalDelayed(true);
            timer = setTimeout(() => {
                setShowModalDelayed(false);
                onCloseModal();
            }, 3000);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [authData, onCloseModal]);

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
                    onClick={authData
                        ? onLogout
                        : onShowModal}
                    hover
                >
                    {authData
                        ? t('Log out')
                        : t('Log in')}
                </Button>
            </div>
            {(isAuthModal || showModalDelayed)
            && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </div>
    );
};
