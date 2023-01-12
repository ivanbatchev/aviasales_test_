/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import uuid from 'react-uuid'

import ShowMoreButton from '../ShowMoreButton'
import Spinner from '../Spinner'
import { ticketsError } from '../../actions'
import { getTickets, asyncTicketRequested } from '../../actions/asyncActions'
import { compose } from '../../utils'
import Ticket from '../Ticket'

import classes from './TicketList.module.scss'

function LinearIndeterminate() {
  return (
    <Box sx={{ width: '100%', marginBottom: '16px' }}>
      <LinearProgress />
    </Box>
  )
}

const visibleTickets = (tickets, filterValue, nomoreTicketsToLoad, ticketsToRender) => {
  switch (filterValue) {
    case 'CHEAPEST': {
      if (!nomoreTicketsToLoad) {
        return [...tickets.slice(0, ticketsToRender)].sort((a, b) => {
          return a.price < b.price ? -1 : 1
        })
      } else {
        return [...tickets]
          .sort((a, b) => {
            return a.price < b.price ? -1 : 1
          })
          .slice(0, ticketsToRender)
      }
    }
    case 'FASTEST': {
      if (!nomoreTicketsToLoad) {
        return [...tickets.slice(0, ticketsToRender)].sort((a, b) => {
          return a.segments[0].duration + a.segments[1].duration < b.segments[0].duration + b.segments[1].duration
            ? -1
            : 1
        })
      } else {
        return [...tickets]
          .sort((a, b) => {
            return a.segments[0].duration + a.segments[1].duration < b.segments[0].duration + b.segments[1].duration
              ? -1
              : 1
          })
          .slice(0, ticketsToRender)
      }
    }
    case 'OPTIMAL': {
      if (!nomoreTicketsToLoad) {
        return [...tickets.slice(0, ticketsToRender)].sort((a, b) => {
          return a.segments[0].duration + a.segments[1].duration + a.price <
            b.segments[0].duration + b.segments[1].duration + b.price
            ? -1
            : 1
        })
      } else {
        return [...tickets]
          .sort((a, b) => {
            return a.segments[0].duration + a.segments[1].duration + a.price <
              b.segments[0].duration + b.segments[1].duration + b.price
              ? -1
              : 1
          })
          .slice(0, ticketsToRender)
      }
    }
    default:
      return tickets
  }
}

const TicketList = ({
  status,
  getTickets,
  tickets,
  ticketsToRender,
  stopLoading,
  filter,
  checkbox,
  asyncTicketRequested,
  searchId,
}) => {
  useEffect(() => {
    asyncTicketRequested()
  }, [])

  useEffect(() => {
    if (searchId && !stopLoading) {
      getTickets()
    }
  }, [tickets, searchId])

  if (status === 'loading') {
    return <Spinner />
  }

  const ticketsToRenderWithStops = (tickets) => {
    const { all, nojumps, onejump, twojumps, threejumps } = checkbox
    const result = []
    const nojumpsTickets = tickets.filter(
      (ticket) => ticket.segments[0].stops.length === 0 || ticket.segments[1].stops.length === 0
    )
    const onejumpTickets = tickets.filter(
      (ticket) => ticket.segments[0].stops.length === 1 || ticket.segments[1].stops.length === 1
    )
    const twojumpsTickets = tickets.filter(
      (ticket) => ticket.segments[0].stops.length === 2 || ticket.segments[1].stops.length === 2
    )
    const threejumpsTickets = tickets.filter(
      (ticket) => ticket.segments[0].stops.length === 3 || ticket.segments[1].stops.length === 3
    )

    if (all) {
      return tickets
    }

    if (nojumps) {
      result.push(...nojumpsTickets)
    }
    if (onejump) {
      result.push(...onejumpTickets)
    }
    if (twojumps) {
      result.push(...twojumpsTickets)
    }
    if (threejumps) {
      result.push(...threejumpsTickets)
    }
    return result
  }

  return (
    <>
      <section className={classes.ticketlist}>
        {!stopLoading && <LinearIndeterminate />}
        {ticketsToRenderWithStops(tickets).length !== 0 ? (
          visibleTickets(ticketsToRenderWithStops(tickets), filter, stopLoading, ticketsToRender).map((ticket) => {
            return <Ticket ticket={ticket} key={uuid()} />
          })
        ) : (
          <h2>No tickets were found</h2>
        )}
      </section>
      <ShowMoreButton hidden={ticketsToRenderWithStops(tickets).length === 0} />
    </>
  )
}

const mapStateToProps = ({ tickets, status, searchId, ticketsToRender, stopLoading, filter, checkbox }) => {
  return {
    filter,
    tickets,
    status,
    searchId,
    ticketsToRender,
    stopLoading,
    checkbox,
  }
}

const mapDispatchToProps = {
  asyncTicketRequested,
  ticketsError,
  getTickets,
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(TicketList)
