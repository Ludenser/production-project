import { Meta } from '@storybook/react';

import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Text>;

export const Primary = {
    args: {
        title: 'Title lorem impsum',
        text: 'Text lorem impsum',
    },
};

export const OnlyTitle = {
    args: {
        title: 'Title lorem impsum',
    },
};

export const OnlyText = {
    args: {
        text: 'Text lorem impsum',
    },
};

export const PrimaryWithRedTheme = {
    args: {
        title: 'Title lorem impsum',
        text: 'Text lorem impsum',
        theme: TextTheme.ERROR,
    },
};
