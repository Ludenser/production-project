import { Meta } from '@storybook/react';

import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Avatar>;

export const Primary = {
    args: {
        size: 150,
        src: AvatarImg,
    },
};

export const Small = {
    args: {
        size: 50,
        src: AvatarImg,
    },
};
