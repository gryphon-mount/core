import React from 'react'
import PropTypes from 'prop-types'

import { GlobalStyle } from 'theme'
import MainContainer from './MainContainer'
import RenderStore from 'utils/RenderStore'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <MainContainer>{children}</MainContainer>
    <RenderStore />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
