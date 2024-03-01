import { Meta } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from 'entities/Profile';
import avatar from 'shared/assets/avatars/admin.jpg';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ProfileCard>;

export const Primary = {
    args: {
        data: {
            username: 'admin',
            age: 28,
            country: Country.Russia,
            lastname: 'Vedeneev',
            first: 'asd',
            city: 'asf',
            currency: Currency.USD,
            avatar,
        },
    },
};

export const WithError = {
    args: {
        error: 'true',
    },
};

export const Loading = {
    args: {
        isLoading: true,
    },
};
