import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { RouteConfig } from '../routeConfig/RouteConfig';

export const AppRouter = () => (
    <Routes>
        {Object.values(RouteConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <div className="page-wrapper">
                        <Suspense fallback={<PageLoader />}>
                            {element}
                        </Suspense>
                    </div>
                )}
            />
        ))}
    </Routes>
);
