/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';
import { CountrySelect } from './CountrySelect';

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof CountrySelect>;

export const Primary: StoryObj<typeof CountrySelect> = {
    render: (args) => <CountrySelect {...args} />,
    args: {},
};
