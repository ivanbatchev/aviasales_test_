import React from 'react'

import Ticket from '../Ticket'

import classes from './TicketList.module.scss'

const TicketList = () => {
  return (
    <section className={classes.ticketlist}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </section>
  )
}
export default TicketList
