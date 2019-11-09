import React from 'react'
import { App } from 'App/index.js'

describe('App', () => {
  describe('Top-level container', () => {
    it('renders without crashing', () => {
      shallow(<App />)
    })
  })
})
