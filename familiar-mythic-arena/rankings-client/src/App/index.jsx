import React from 'react'
import { Link } from 'react-router-dom'
// import RenderStore from 'utils/RenderStore'
import Layout from './Layout'
import Routes from './Routes'

const App = () => (
  <Layout>
    <Routes />
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/leaderboard">Leaderboard</Link>
      </li>
      <li>
        <Link to="/location">Location</Link>
      </li>
      <li>
        <Link to="/locations">Locations</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/message">Message</Link>
      </li>
      <li>
        <Link to="/notification">Notification</Link>
      </li>
      <li>
        <Link to="/notifications">Notifcations</Link>
      </li>
      <li>
        <Link to="/404">404</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/user">User</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
    {/* <RenderStore /> */}
  </Layout>
)

export default App
