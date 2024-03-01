import { withThemeByClassName } from '@storybook/addon-themes';
import { Preview, ReactRenderer } from '@storybook/react';
import 'app/styles/index.scss';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { Theme } from '../../src/shared/contexts';
import i18n from './i18n';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        i18n,
        locale: 'en',
        locales: {
            en: 'English',
            ru: 'Russian',
        },
    },
    decorators: [
        // (Story) => (
        //     Story()
        // ),
        // ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        withThemeByClassName<ReactRenderer>({
            themes: {
                light: Theme.LIGHT,
                dark: Theme.DARK,
            },
            defaultTheme: 'light',
            parentSelector: 'body',
        }),
    ],
};

export default preview;
