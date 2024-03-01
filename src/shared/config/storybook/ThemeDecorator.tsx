import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'shared/contexts';

export const ThemeDecorator = (theme: Theme) => (StoryFn: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryFn />
        </div>
    </ThemeProvider>
);
