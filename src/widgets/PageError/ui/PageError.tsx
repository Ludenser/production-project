import { useTranslation } from 'react-i18next';
import ErrorSvg from 'shared/assets/images/errorPng.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
 className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
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
                    className={cls.button}
                    onClick={reloadPage}
                    hover
                >
                    {t('Reload page')}
                </Button>
            </div>
        </div>
    );
};
