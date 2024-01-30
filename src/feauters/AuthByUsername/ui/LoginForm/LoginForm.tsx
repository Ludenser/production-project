import {
    FormEvent, memo, useCallback, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DoneSVG from 'shared/assets/icons/done.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
 className?: string;
 onClose: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onClose }: LoginFormProps) => {
    const { t } = useTranslation();
    const [loginDone, setLoginDone] = useState(false);
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const clearForm = useCallback(() => {
        dispatch(loginActions.clearUsername());
        dispatch(loginActions.clearPassword());
    }, [dispatch]);

    const onChangeUsername = useCallback((value:string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async (e: FormEvent) => {
        e.preventDefault();
        const res = await dispatch(loginByUsername({ username, password }));
        console.log(res.meta);
        if (res.meta.requestStatus === 'fulfilled') {
            setLoginDone(true);
            clearForm();
        }
    }, [clearForm, dispatch, password, username]);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        if (loginDone) {
            timer = setTimeout(() => {
                setLoginDone(false);
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [loginDone]);

    let content;
    if (isLoading) {
        content = <Loader />;
    } else if (loginDone && !error) {
        content = <DoneSVG style={{ stroke: '#FFF', width: '100px', height: '93px' }} />;
    } else {
        content = (
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
        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames('', { [cls.Container]: isLoading }, [className])}>
                <Text title={t('Authorization')} />
                {error && <Text text={error} theme={TextTheme.ERROR} />}
                {content}
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
