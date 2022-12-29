import React from 'react'

import { withTicketService } from './components/hoc'
import Header from './components/Header'
import classes from './App.module.scss'
import Main from './components/Main'

const App = ({ ticketService }) => {
  return (
    <div className={classes.app}>
      <Header />
      <Main />
    </div>
  )
}
export default withTicketService()(App)
