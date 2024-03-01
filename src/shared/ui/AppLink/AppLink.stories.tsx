/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as Meta<typeof AppLink>;

const Template: StoryObj<typeof AppLink> = {
    render: (args) => <AppLink {...args} />,
};

export const Primary: StoryObj<typeof AppLink> = {
    ...Template,
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: StoryObj<typeof AppLink> = {
    ...Template,
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
};

export const Red: StoryObj<typeof AppLink> = {
    ...Template,
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED,
    },
};
