import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Profile } from 'entities/Profile/model/types/profile';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
 className?: string;
 data?: Profile;
 isLoading?: boolean;
 error?: string;
 onChangeFirstName?: (value?: string)=> void;
 onChangeLastName?: (value?: string)=> void;
 onChangeAge?: (value?: string)=> void;
 onChangeCity?: (value?: string)=> void;
 onChangeAvatar?: (value?: string)=> void;
 onChangeUsername?: (value?: string)=> void;
 onChangeCurrency?: (currency: Currency) => void;
 onChangeCountry?: (country: Country) => void;
 readonly?: boolean;
}

export const ProfileCard = (props:ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        onChangeFirstName,
        onChangeLastName,
        readonly,
        onChangeAge,
        onChangeCity,
        onChangeCountry,
        onChangeCurrency,
        onChangeAvatar,
        onChangeUsername,
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, isLoading ? cls.loading : ''])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            {data?.avatar && (
                <div className={cls.avatarWrapper}>
                    <Avatar src={data.avatar} />
                </div>
            )}
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    label={t('your-firstname')}
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                    disabled={readonly}
                />
                <Input
                    value={data?.lastname}
                    label={t('your-lastname')}
                    className={cls.input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                    disabled={readonly}
                />
                <Input
                    value={data?.age}
                    label={t('your-age')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                    disabled={readonly}
                    type="number"
                />
                <Input
                    value={data?.city}
                    label={t('your-city')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                    disabled={readonly}
                />
                <Input
                    value={data?.avatar}
                    label={t('your-avatar')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                    disabled={readonly}
                />
                <Input
                    value={data?.username}
                    label={t('your-username')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                    disabled={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
