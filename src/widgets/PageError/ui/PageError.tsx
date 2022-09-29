import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import ErrorSvg from 'shared/assets/images/errorPng.svg';
import cls from './PageError.module.scss';

interface PageErrorProps {
 className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <div className={cls.wrapper}>
                <p className={cls.errorText}>
                    {t('Something went wrong')}
                </p>
                <ErrorSvg />
                <Button
                    className={cls.Button}
                    onClick={reloadPage}
                >
                    {t('Reload page')}
                </Button>
            </div>
        </div>
    );
};
