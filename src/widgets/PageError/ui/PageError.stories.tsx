import { Meta } from '@storybook/react';

import { PageError } from './PageError';

export default {
    title: 'widget/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof PageError>;

export const Primary = {
    args: {},
};
