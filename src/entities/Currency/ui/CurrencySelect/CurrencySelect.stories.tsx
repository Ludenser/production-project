import { Meta } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof CurrencySelect>;

export const Primary = {
    args: {},
};
