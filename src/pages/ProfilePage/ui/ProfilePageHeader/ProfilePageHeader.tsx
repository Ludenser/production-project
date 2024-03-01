import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
 className?: string;
}

export const ProfilePageHeader = (props:ProfilePageHeaderProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('profile');

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('profile-text')} />
            {readonly
                ? (
                    <Button
                        hover
                        theme={ButtonTheme.OUTLINE}
                        className={cls.editBtn}
                        onClick={onEdit}
                    >
                        {t('edit')}
                    </Button>
                )
                : (
                    <>
                        <Button
                            hover
                            theme={ButtonTheme.OUTLINE_DONE}
                            className={cls.saveBtn}
                            onClick={onSave}
                        >
                            {t('save')}
                        </Button>
                        <Button
                            hover
                            theme={ButtonTheme.OUTLINE_WARN}
                            className={cls.cancelBtn}
                            onClick={onCancelEdit}
                        >
                            {t('cancel')}
                        </Button>
                    </>
                )}
        </div>
    );
};
