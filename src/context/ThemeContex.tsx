import { createContext, Dispatch, SetStateAction } from 'react';

type ThemeContext = {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
};

type Props = {
    children: any,
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeCtx = createContext<ThemeContext | null>(null);

export default function ThemeContext({ children, theme, setTheme }: Props) {
    return (
        <ThemeCtx.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeCtx.Provider>
    )
}