import { createGlobalStyle } from 'styled-components'
import WebFont from 'webfontloader'

import { allBorderOutlines } from 'components/atoms/styles'

WebFont.load({
  google: {
    families: ['Volkhov', 'Roboto', 'Material+Icons']
  }
})

export const colors = {
  black: '#111111',
  white: '#ffffff',
  gray: '#cccccc',
  blue: '#0074ff',
  // ---
  links: '#61dafb'
}

export const fonts = {
  primary: `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen",
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

  /* dev-only top-level styles */
  ${allBorderOutlines}


  /* content */
  color: ${colors.black};
  background-color: ${colors.white};
  font-family: ${fonts.primary};
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
`

export default theme
