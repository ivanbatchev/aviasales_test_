import React from 'react'

import JumpsCheckForm from '../JumpsCheckForm'
import TicketList from '../TicketList'
import TicketsFilter from '../TicketsFilter'

import classes from './Main.module.scss'

const Main = () => {
  return (
    <main className={classes.main}>
      <JumpsCheckForm />
      <div className={classes.wrapper}>
        <TicketsFilter />
        <TicketList />
      </div>
    </main>
  )
}
export default Main
