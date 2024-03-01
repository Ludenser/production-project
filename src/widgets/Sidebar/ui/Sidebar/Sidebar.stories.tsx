import { Meta } from '@storybook/react';

import { Sidebar } from './Sidebar';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Sidebar>;

export const Primary = {
    args: {},
};
