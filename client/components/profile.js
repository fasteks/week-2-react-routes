import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Profile = () => {
  const { user } = useParams()
  return (
    <div>
      <div id="title">
        Profile
      </div>
      <div>
        <Link to="/dashboard">Go To Root</Link>
      </div>
      <div>
        <Link to="/dashboard/main">Go To Main</Link>
      </div>
      <div id="username">{user}</div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
