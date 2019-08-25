import { createGlobalStyle } from 'styled-components'

export const colors = {
  black: '#111111',
  white: '#ffffff',
  gray: '#cccccc',
  links: '#61dafb'
}

export const fonts = {
  primary: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  secondary: `serif`,
  monospace: `source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace`
}

export const boxShadow = `0 2px 4px -1px ${colors.gray}`

export const theme = {
  boxShadow,
  colors,
  fonts
}

export const GlobalStyle = createGlobalStyle`
body {
  /* box */
  margin: 0;
  padding: 0;

  /* content */
  color: ${colors.black};
  background-color: ${colors.white};
  font-family: ${fonts.primary};
  font-size: 1.1em;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${fonts.secondary};
}

code {
  font-family: ${fonts.monospace};
}

ul {
   list-style: none;
}

ul>li:before {
  content: "•";
  font-size: 1em;
  padding-right: 5px;
}
`

export default theme
