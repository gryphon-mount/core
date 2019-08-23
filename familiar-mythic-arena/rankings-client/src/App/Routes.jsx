import React from 'react'
import { Switch, Route } from 'react-router-dom'
import * as screens from 'components/screens'

const Routes = () => (
  <Switch>
    <Route exact path='/about' component={screens.About} />
    <Route exact path='/dashboard' component={screens.Dashboard} />
    <Route exact path='/leaderboard' component={screens.Leaderboard} />
    <Route exact path='/location' component={screens.Location} />
    <Route exact path='/locations' component={screens.Locations} />
    <Route exact path='/login' component={screens.Login} />
    <Route exact path='/message' component={screens.Message} />
    <Route exact path='/notification' component={screens.Notification} />
    <Route exact path='/notifications' component={screens.Notifications} />
    <Route exact path='/404' component={screens.Page404} />
    <Route exact path='/signup' component={screens.Signup} />
    <Route exact path='/user' component={screens.User} />
    <Route exact path='/users' component={screens.Users} />
    <Route exact path='/' component={screens.Home} />
    <Route path='/' component={screens.Page404} />
  </Switch>
)

export default Routes
