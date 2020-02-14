import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { GlobalStyle } from 'theme'
import RenderStore from 'utils/RenderStore'
import Routes from 'App/Routes'

import { fetchProfile } from 'state/profile'
import { noStateToMap } from 'utils'

export class App extends Component {
  static propTypes = {
    fetchProfile: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { fetchProfile } = this.props

    fetchProfile()
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <main>
          <Routes />
        </main>
        <RenderStore />
      </>
    )
  }
}

const mapDispatch = dispatch => ({
  fetchProfile: () => dispatch(fetchProfile())
})

export default connect(noStateToMap, mapDispatch)(App)
