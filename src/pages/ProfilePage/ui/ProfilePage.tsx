import { profileReducer } from 'entities/Profile';
import { t } from 'i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { FadeInWrapper } from 'shared/ui/FadeInWrapper/FadeInWrapper';

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
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <FadeInWrapper>
                <div className={classNames('', {}, [className])}>
                    {t('Profile page')}
                </div>
            </FadeInWrapper>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
