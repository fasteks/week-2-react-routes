import React from 'react'
import { Link } from 'react-router-dom'

import Header from './header'

const Main = () => {
  return (
    <div>
      <a
        role="button"
        aria-label="Go to google link"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.google.com/"
      >
        <Header />
      </a>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Main</div>
          <div>
            <Link to="/dashboard">Go To Root</Link>
          </div>
          <div>
            <Link to="/dashboard/profile/71cfff71-34e1-46eb-95ad-29637d913771">Go To Profile</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
