import { RoutePath } from 'app/providers/router/routeConfig/RouteConfig';
import { TFunction } from 'i18next';
import React from 'react';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList = (t:TFunction): SidebarItemType[] => [
    {
        path: RoutePath.main,
        Icon: AboutIcon,
        text: t('Main-page-link'),
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: t('Profile-page-link'),
    },

];
