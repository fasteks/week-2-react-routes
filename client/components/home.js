import React from 'react'
import { Link } from 'react-router-dom'

import Header from './header'

const Home = () => {
  return (
    <div>
      <Header />
      <div id="title">Dashboard</div>
      <Link to="/dashboard/main">Go To Main</Link>
      <Link to="/dashboard/profile/71cfff71-34e1-46eb-95ad-29637d913771">Go To Profile</Link>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
