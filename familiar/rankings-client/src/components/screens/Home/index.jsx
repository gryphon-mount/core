import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getAppName, getProductName } from 'state/meta'
import logo from './familiar_logo.jpg'

export const Home = ({ appName, productName }) => (
  <StyledContainer>
    <Logo src={`${logo}`} alt="Familiar: Mythic Arena" />
    <h2>
      {appName}
      <br />
      <small style={{ fontWeight: 'lighter' }}>{productName}</small>
    </h2>
  </StyledContainer>
)

Home.propTypes = {
  appName: PropTypes.string,
  productName: PropTypes.string
}

const StyledContainer = styled.div`
  text-align: center;
`

const Logo = styled.img`
  max-width: 100px;
`

const mapState = state => ({
  appName: getAppName(state),
  productName: getProductName(state)
})

export default connect(mapState)(Home)
