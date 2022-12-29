import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import ShowMoreButton from '../ShowMoreButton'
import Spinner from '../Spinner'
import ErrorIndicator from '../ErrorIndicator'
import { withTicketService } from '../hoc'
import { ticketsLoaded, ticketsRequested, ticketsError } from '../../actions'
import { compose } from '../../utils'
import Ticket from '../Ticket'

import classes from './TicketList.module.scss'

const TicketList = ({ tickets, ticketService, error, ticketsLoaded, loading, ticketsRequested, ticketsError }) => {
  useEffect(() => {
    ticketsRequested()
    ticketService
      .getTickets()
      .then((data) => {
        ticketsLoaded(data)
      })
      .catch((err) => {
        ticketsError(err)
      })
  }, [])

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorIndicator />
  }

  return (
    <>
      <section className={classes.ticketlist}>
        {tickets.map((ticket) => {
          return <Ticket ticket={ticket} key={ticket.id} />
        })}
      </section>
      <ShowMoreButton />
    </>
  )
}

const mapStateToProps = ({ tickets, loading, error }) => {
  return {
    tickets,
    loading,
    error,
  }
}

const mapDispatchToProps = {
  ticketsLoaded,
  ticketsRequested,
  ticketsError,
}

export default compose(withTicketService(), connect(mapStateToProps, mapDispatchToProps))(TicketList)
