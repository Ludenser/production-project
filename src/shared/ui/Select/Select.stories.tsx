import { Meta } from '@storybook/react';
import { Select } from 'shared/ui/Select/Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Select>;

export const Primary = {
    args: {
        label: 'Укажите значение',
        options: [
            { value: '123', content: 'Первый пункт' },
            { value: '1234', content: 'Второй пункт' },
        ],
    },
};
