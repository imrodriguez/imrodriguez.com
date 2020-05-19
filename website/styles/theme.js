import {
    ThemeProvider,
    createGlobalStyle
} from "styled-components"
import { config, dom } from "@fortawesome/fontawesome-svg-core"

const theme = {
    colors: {
        primary: "#9b003dff",
        secondary: "#ffcd00ff",
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }

    * {
        font-family: "Inter";
    }

    a:hover {
        cursor: pointer; 
    }
    ${dom.css()}
`

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProvider>
)

export default Theme