import { Meta } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Button>;

export const Primary = {
    args: {
        children: 'Text',
    },
};

export const Clear = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
};

export const Outline = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};

export const BackgroundTheme = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInverted = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND,
        square: true,
    },
};

export const SquareSizeL = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeXL = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.XL,
    },
};

export const Disabled = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND,
        disabled: true,
    },
};
