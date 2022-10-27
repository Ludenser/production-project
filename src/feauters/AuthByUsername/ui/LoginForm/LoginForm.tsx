import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
 className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div
            className={classNames(cls.LoginForm, {}, [className])}
        >
            <Input required label={t('Username')} type="text" />
            <Input required label={t('Password')} type="text" />
            <Button
                theme={ButtonTheme.BACKGROUND}
                className={cls.loginBtn}
            >
                {t('Login')}
            </Button>
        </div>
    );
};
