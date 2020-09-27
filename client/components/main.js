import React from 'react'
import { Link } from 'react-router-dom'

import Header from './header'

const Main = () => {
  return (
    <div>
      <Header />
      <div id="title">Main</div>
      <Link to="/dashboard">Go To Root</Link>
      <Link to="/dashboard/profile/71cfff71-34e1-46eb-95ad-29637d913771">Go To Profile</Link>
    </div>
  )
}

Main.propTypes = {}

export default Main
