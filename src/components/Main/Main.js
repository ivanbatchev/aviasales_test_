import React from 'react'

import JumpsCheckForm from '../JumpsCheckForm'
import TicketList from '../TicketList'
import TicketsFilter from '../TicketsFilter'
import ErrorBoundary from '../ErrorBoundary'

import classes from './Main.module.scss'

const Main = () => {
  return (
    <main className={classes.main}>
      <JumpsCheckForm />
      <div className={classes.wrapper}>
        <ErrorBoundary>
          <TicketsFilter />
          <TicketList />
        </ErrorBoundary>
      </div>
    </main>
  )
}
export default Main
