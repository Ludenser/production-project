import { Meta, StoryFn } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = () => <Navbar />;

export const Primary = {
    render: Template,
    args: {},

    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    username: 'admin',
                    id: '12312',
                },
            },
        }),
    ],
};
