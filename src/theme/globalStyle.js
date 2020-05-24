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
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background: var(--color-primary);
    max-width: 1680px;
    overflow-x: hidden;
    color: var(--color-dark);
}
h1, h2, h3, h4, h5, h6{
    color: var(--color-dark);
}
  
a {
    text-decoration: none;
    color: var(--color-dark-lighter);
}

ul {
    margin: 0 auto;
    list-style-type: none;
}
`
