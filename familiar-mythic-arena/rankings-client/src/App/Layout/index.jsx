import React from 'react'
import PropTypes from 'prop-types'

import { GlobalStyle } from 'theme'
import MainContainer from './MainContainer'
import NavBar from './NavBar'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <NavBar />
    <MainContainer>{children}</MainContainer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
