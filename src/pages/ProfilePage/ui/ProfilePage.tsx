import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
    ProfileCard,
    ValidateProfileErrors,
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    profileReducer,
} from 'entities/Profile';
import {
    memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
 className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileErrors.SERVER_ERROR]: t('error.server'),
        [ValidateProfileErrors.INCORRECT_AGE]: t('error.age'),
        [ValidateProfileErrors.INCORRECT_COUNTRY]: t('error.country'),
        [ValidateProfileErrors.INCORRECT_USER_DATA]: t('error.userdata'),
        [ValidateProfileErrors.NO_DATA]: t('error.nodata'),
    };

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChangeFirstName = useCallback((value?:string) => {
        dispatch(profileActions.updateProfileData({ first: value || '' }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChangeLastName = useCallback((value?:string) => {
        dispatch(profileActions.updateProfileData({ lastname: value || '' }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChangeCity = useCallback((value?:string) => {
        dispatch(profileActions.updateProfileData({ city: value || '' }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChangeAge = useCallback((value?:string) => {
        dispatch(profileActions.updateProfileData({ age: Number(value) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChangeAvatar = useCallback((value?:string) => {
        dispatch(profileActions.updateProfileData({ avatar: value || '' }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChangeUsername = useCallback((value?:string) => {
        dispatch(profileActions.updateProfileData({ username: value || '' }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfileData({ currency }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfileData({ country }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length && validateErrors.map((err) => (
                    <Text
                        key={err}
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[err]}
                    />
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCountry={onChangeCountry}
                    onChangeCurrency={onChangeCurrency}
                    readonly={readonly}
                />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
