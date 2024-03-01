import { Meta } from '@storybook/react';

import { Loader } from './Loader';

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Loader>;

export const Primary = {
    args: {},
};
