import React from 'react'
import TestMe from 'App/index.js'

describe('App', () => {
  describe('App/index.js', () => {
    it('renders without crashing', () => {
      shallow(<TestMe />)
    })
  })
})
