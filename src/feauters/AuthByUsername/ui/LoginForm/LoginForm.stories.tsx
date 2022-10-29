import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [StoreDecorator({
    loginForm: {
        username: '123',
        password: 'asdfsdf',
    },
})];

export const PrimaryWithError = Template.bind({});
PrimaryWithError.args = {
};
PrimaryWithError.decorators = [StoreDecorator({
    loginForm: {
        username: '123',
        password: 'asdfsdf',
        error: 'Ошибка',
    },
})];

export const PrimaryWithLoading = Template.bind({});
PrimaryWithLoading.args = {
};
PrimaryWithLoading.decorators = [StoreDecorator({
    loginForm: {
        username: '123',
        password: 'asdfsdf',
        isLoading: true,
    },
})];

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator(Theme.DARK), ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: {
        username: '123',
        password: 'asdfsdf',
    },
})];

export const DarkWithError = Template.bind({});
DarkWithError.args = {
};
DarkWithError.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: {
        username: '123',
        password: 'asdfsdf',
        error: 'Ошибка',
    },
})];

export const DarkWithLoading = Template.bind({});
DarkWithLoading.args = {
};
DarkWithLoading.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: {
        username: '123',
        password: 'asdfsdf',
        isLoading: true,
    },
})];
