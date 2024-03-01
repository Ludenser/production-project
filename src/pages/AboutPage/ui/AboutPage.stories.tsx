import { Meta, StoryFn } from '@storybook/react';

import AboutPage from './AboutPage';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof AboutPage>;

const Template: StoryFn<typeof AboutPage> = () => <AboutPage />;

export const Primary = {
    render: Template,
    args: {},
};
