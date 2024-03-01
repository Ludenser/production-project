import { Meta } from '@storybook/react';

import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Input>;

export const Primary = {
    args: {
        value: 'Value',
        label: 'Label',
    },
};
