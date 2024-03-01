import { Meta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof LoginForm>;

export const Primary = {
    args: {},

    decorators: [
        StoreDecorator({
            loginForm: {
                username: '123',
                password: 'asdfsdf',
            },
        }),
    ],
};

export const PrimaryWithError = {
    args: {},

    decorators: [
        StoreDecorator({
            loginForm: {
                username: '123',
                password: 'asdfsdf',
                error: 'Ошибка',
            },
        }),
    ],
};

export const PrimaryWithLoading = {
    args: {},

    decorators: [
        StoreDecorator({
            loginForm: {
                username: '123',
                password: 'asdfsdf',
                isLoading: true,
            },
        }),
    ],
};
