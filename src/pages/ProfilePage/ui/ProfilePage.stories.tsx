import { Meta } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ProfilePage>;

export const Primary = {
    args: {},

    decorators: [
        StoreDecorator({
            profile: {
                readonly: true,
                form: {
                    username: 'admin',
                    age: 28,
                    country: Country.Russia,
                    lastname: 'Vedeneev',
                    first: 'asd',
                    city: 'asf',
                    currency: Currency.USD,
                },
            },
        }),
    ],
};
