/* eslint-disable i18next/no-literal-string */
import { RoutePath } from 'app/providers/router/routeConfig/RouteConfig';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

export const Navbar = () => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
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
                    onClick={onToggleModal}
                    hover
                >
                    {t('Log in')}
                </Button>
            </div>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolor laudantium provident totam iusto nemo veritatis architecto?
                Repellat doloremque praesentium blanditiis quidem,
                placeat cum sed quo quaerat aspernatur soluta ipsam odit.
            </Modal>
        </div>
    );
};
