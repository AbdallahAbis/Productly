import { createGlobalStyle } from "styled-components"
import "./variables.css"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

*, *::before, *::after{
    padding: 0;
    margin: 0;
    box-sizing: inherit;
}

html{
    font-size: 62.5%;
    box-sizing: border-box;
}

body {
    padding: 0 15rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background: var(--color-primary);
    max-width: 1680px;
}
  
a {
    text-decoration: none;
    color: #000;
}

ul {
    margin: 0 auto;
    list-style-type: none;
}
`
