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

// import { createContext, Dispatch, SetStateAction, ReactNode, useState } from 'react';

// type ThemeContextType = {
//     theme: string;
//     setTheme: Dispatch<SetStateAction<string>>;
// };

// type ThemeContextProps = {
//     children: ReactNode
// }

// const defaultValue = {
//     theme: '',
//     setTheme: () => {}
// };

// export const ThemeCtx = createContext<ThemeContextType>(defaultValue);

// export default function ThemeContext({ children }: ThemeContextProps) {
//     const themeLocalStorage = localStorage.getItem("theme");
//     const [theme, setTheme] = useState(themeLocalStorage ? themeLocalStorage : "dark");
    
//     return (
//         <ThemeCtx.Provider value={{ theme, setTheme }}>
//             {children}
//         </ThemeCtx.Provider>
//     )
// }