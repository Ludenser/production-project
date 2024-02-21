/* eslint-disable i18next/no-literal-string */
import { userActions } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from 'shared/contexts';
import { classNames } from 'shared/lib/classNames/classNames';
import { FadeInWrapper } from 'shared/ui/FadeInWrapper/FadeInWrapper';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <FadeInWrapper className="page-wrapper">
                        <AppRouter />
                    </FadeInWrapper>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
