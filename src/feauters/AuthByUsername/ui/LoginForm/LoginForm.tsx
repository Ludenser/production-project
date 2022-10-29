import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from 'feauters/AuthByUsername/model/selectors/getLoginState';
import { loginByUsername } from 'feauters/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
 className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username,
        password,
        error,
        isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value:string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback((e) => {
        e.preventDefault();
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div
            className={classNames('', {}, [className])}
        >
            <Text title={t('Authorization')} />
            {error && (<Text text={error} theme={TextTheme.ERROR} />)}
            <form className={cls.LoginForm} onSubmit={onLoginClick}>
                <Input
                    onChange={onChangeUsername}
                    required
                    label={t('Username')}
                    type="text"
                    value={username}
                />
                <Input
                    onChange={onChangePassword}
                    required
                    label={t('Password')}
                    type="text"
                    value={password}
                />
                <Button
                    theme={ButtonTheme.BACKGROUND}
                    className={cls.loginBtn}
                    disabled={isLoading}
                    type="submit"
                >
                    {t('Login')}
                </Button>
            </form>
        </div>
    );
});
