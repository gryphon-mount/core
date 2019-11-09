import React from 'react'
import { Switch, Route } from 'react-router-dom'
import * as screens from 'components/screens'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={screens.Home} />
    <Route path="/" component={screens.Home} />
  </Switch>
)

export default Routes
