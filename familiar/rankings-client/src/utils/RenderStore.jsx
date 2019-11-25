import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { testDispatch } from 'state/testDispatch'
import { getEnv } from 'state/meta'

class RenderStore extends Component {
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
    store: PropTypes.object.isRequired
  }

  static defaultProps = {
    store: {}
  }

  state = {
    isShown: false
  }

  render() {
    const preStyle = {
      // box
      backgroundColor: '#f1f1f1',
      border: '0.5px solid #777',
      borderRadius: 10,
      minHeight: 100,
      margin: 40,
      padding: '0 30px',

      // text
      fontFamily: 'monospace',
      lineHeight: '1.5',
      textAlign: 'left'
    }
    const buttonStyle = {
      fontFamily: 'monospace'
    }

    const { env, handleClick, store } = this.props
    const { isShown } = this.state

    if (env === 'development') {
      console.log('⭐ STATE ⭐', store)

      if (isShown) {
        return (
          <pre style={preStyle}>
            <p>
              <strong>Application Data</strong>
            </p>
            {JSON.stringify(store, null, 2)}
            <p>
              <button style={buttonStyle} onClick={handleClick}>
                Action Test
              </button>
            </p>
          </pre>
        )
      }
    }

    return <Fragment />
  }
}

const mapState = state => ({
  env: getEnv(state),
  store: state
})

const mapDispatch = dispatch => ({
  handleClick: () => dispatch(testDispatch())
})

export default connect(
  mapState,
  mapDispatch
)(RenderStore)
