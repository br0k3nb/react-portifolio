import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body: {
        background: "${props => props.theme.colors.primary}"
        color: ${props => props.theme.colors.text}
    }

`