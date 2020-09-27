import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Head from './head'
import Header from './header'
import Dashboard from './dashboard'
import Main from './main'
import Profile from './profile'

const Home = () => {
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <Switch>
        <Route exact path="/dashboard/" component={() => <Dashboard />} />
        <Route exact path="/dashboard/main" component={() => <Main />} />
        <Route exact path="/dashboard/profile/:user" component={() => <Profile />} />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
