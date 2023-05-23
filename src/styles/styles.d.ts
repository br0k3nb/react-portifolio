import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            border: string;
            bottomBorder: string;
            text: string;
        }        
    }
}