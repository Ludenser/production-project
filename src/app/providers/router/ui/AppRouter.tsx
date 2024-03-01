import { Suspense, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { AppRoutesProps, RouteConfig } from '../routeConfig/RouteConfig';
import { RequireAuth } from './RequireAuth';

const renderWithWrapper = (route: AppRoutesProps) => {
    const element = (
        <div className="page-wrapper">
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        </div>
    );

    return (
        <Route
            key={route.path}
            path={route.path}
            element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
        />
    );
};

export const AppRouter = memo(() => (
    <Routes>
        {Object.values(RouteConfig).map(renderWithWrapper)}
    </Routes>
));
