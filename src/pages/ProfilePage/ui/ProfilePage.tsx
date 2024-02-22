import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

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

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
