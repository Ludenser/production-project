import {
    createContext, FC, useMemo, useState,
} from 'react';

export const enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme.DARK || Theme.LIGHT;

interface ThemeProviderProps {
   initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    document.body.className = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme.DARK || Theme.LIGHT;
    const {
        children,
        initialTheme,
    } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
