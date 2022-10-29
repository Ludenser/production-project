import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const LightLogin = Template.bind({});
LightLogin.args = {};
LightLogin.decorators = [StoreDecorator({
    user: {
        authData: {
            username: 'admin',
            id: '12312',
        },
    },
})];

export const DarkLogout = Template.bind({});
DarkLogout.args = {};
DarkLogout.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
