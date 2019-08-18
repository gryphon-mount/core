import { createGlobalStyle } from 'styled-components'

export const colors = {
  black: '#111111',
  white: '#ffffff',
  links: '#61dafb'
}

export const fonts = {
  primary: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  secondary: `serif`,
  monospace: `source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace`
}

export const theme = { colors, fonts }
export default theme

export const GlobalStyle = createGlobalStyle`
body {
  /* box */
  margin: 0;
  padding: 0;

  /* content */
  color: ${colors.black};
  background-color: ${colors.black};
  font-family: ${fonts.primary};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${fonts.secondary};
}

code {
  font-family: ${fonts.monospace};
}
`
