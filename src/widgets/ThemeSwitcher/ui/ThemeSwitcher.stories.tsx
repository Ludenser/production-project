import { Meta } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';

export default {
    title: 'widget/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ThemeSwitcher>;

export const Primary = {
    args: {},
};
