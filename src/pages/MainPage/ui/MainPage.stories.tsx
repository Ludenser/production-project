import { Meta, StoryFn } from '@storybook/react';

import MainPage from './MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof MainPage>;

const Template: StoryFn<typeof MainPage> = () => <MainPage />;

export const Primary = {
    render: Template,
    args: {},
};
