import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <div id="title">Main</div>
      <Link to="/dashboard/profile/71cfff71-34e1-46eb-95ad-29637d913771">Go To Profile</Link>
      <Link to="/dashboard">Go To Root</Link>
    </div>
  )
}

Main.propTypes = {}

export default Main
