import { createContext } from 'react';
import theme from './theme';

type ThemeContextPRoviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({children} : ThemeContextPRoviderProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
