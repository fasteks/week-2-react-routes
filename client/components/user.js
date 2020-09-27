import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Header from './header'

const User = () => {
  const { user } = useParams()
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Profile</div>
          <div>
            <Link to="/dashboard">Go To Root</Link>
          </div>
          <div>
            <Link to="/dashboard/main">Go To Main</Link>
          </div>
          <div id="username">{user}</div>
        </div>
      </div>
    </div>
  )
}

User.propTypes = {}

export default User
