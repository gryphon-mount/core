import { createGlobalStyle } from 'styled-components'
import WebFont from 'webfontloader'

import 'normalize.css'

export const colors = {
  black: '#222',
  white: '#fff',
  gray: '#ccc',
  // ---
  blue: '#0074ff',
  // ---
  links: '#61dafb'
}

WebFont.load({
  google: {
    families: ['Volkhov', 'Source Sans Pro']
  }
})

export const fonts = {
  primary: `"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  secondary: `"Volkhov", serif`,
  monospace: `source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace`
}

export const boxShadow = `0 2px 4px -1px ${colors.gray}`

export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
}

export const theme = {
  boxShadow,
  colors,
  device,
  fonts,
  size
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

h2 {
  color: ${colors.blue};
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
