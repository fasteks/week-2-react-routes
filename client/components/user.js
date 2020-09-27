import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Header from './header'

const User = () => {
  const { user } = useParams()
  return (
    <div>
      <Header />
      <div id="title">Profile</div>
      <Link to="/dashboard">Go To Root</Link>
      <Link to="/dashboard/main">Go To Main</Link>
      <div id="username">{user}</div>
    </div>
  )
}

User.propTypes = {}

export default User
