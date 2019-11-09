import React from 'react'
import PropTypes from 'prop-types'

import { GlobalStyle } from 'theme'
import Main from './Main'
import RenderStore from 'utils/RenderStore'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Main>{children}</Main>
    <RenderStore />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
