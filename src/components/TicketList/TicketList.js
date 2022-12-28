import React, { useContext } from 'react'

import { dataContext } from '../../DataContext'
import Ticket from '../Ticket'

import classes from './TicketList.module.scss'

const TicketList = () => {
  const data = useContext(dataContext)
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
