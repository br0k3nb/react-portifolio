import { createContext, Dispatch, SetStateAction, ReactNode, useState } from 'react';

type ThemeContextType = {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
};

type ThemeContextProps = {
    children: ReactNode
}

const defaultValue = {
    theme: '',
    setTheme: () => {}
};

export const ThemeCtx = createContext<ThemeContextType>(defaultValue);

export default function ThemeContext({ children }: ThemeContextProps) {
    const themeLocalStorage = localStorage.getItem("theme");
    const [theme, setTheme] = useState(themeLocalStorage ? themeLocalStorage : "dark");
    
    return (
        <ThemeCtx.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeCtx.Provider>
    )
}