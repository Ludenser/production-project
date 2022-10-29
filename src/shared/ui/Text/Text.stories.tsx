import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem impsum',
    text: 'Text lorem impsum',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title lorem impsum',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text lorem impsum',
};

export const PrimaryWithRedTheme = Template.bind({});
PrimaryWithRedTheme.args = {
    title: 'Title lorem impsum',
    text: 'Text lorem impsum',
    theme: TextTheme.ERROR,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem impsum',
    text: 'Text lorem impsum',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OnlyTitleDark = Template.bind({});

OnlyTitleDark.args = {
    title: 'Title lorem impsum',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text lorem impsum',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkWithRedTheme = Template.bind({});
PrimaryDarkWithRedTheme.args = {
    title: 'Title lorem impsum',
    text: 'Text lorem impsum',
    theme: TextTheme.ERROR,
};
PrimaryDarkWithRedTheme.decorators = [ThemeDecorator(Theme.DARK)];
