import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

import ShowMoreButton from '../ShowMoreButton'
import Spinner from '../Spinner'
import { ticketsError } from '../../actions'
import { asyncTicketRequested, getTickets } from '../../actions/asyncActions'
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
  loading,
  asyncTicketRequested,
  searchId,
  getTickets,
  tickets,
  ticketsToRender,
  nomoreTicketsToLoad,
  filter,
  checkbox,
}) => {
  // Request spinner and searchId for further loading
  //============================================================
  useEffect(() => {
    asyncTicketRequested()
  }, [asyncTicketRequested])

  // Getting tickets async when it's done need to clear interval
  //============================================================
  const intervalRef = useRef()
  useEffect(() => {
    if (searchId !== '') {
      intervalRef.current = setInterval(() => {
        getTickets(searchId)
      }, 350)
    }
  }, [getTickets, searchId])

  useEffect(() => {
    if (nomoreTicketsToLoad) {
      clearInterval(intervalRef.current)
    }
  })

  // Show spinner on loading & show data when not
  //============================================================
  if (loading) {
    return <Spinner />
  }
  //============================================================
  const ticketsToRenderWithStops = (tickets) => {
    const { all, nojumps, onejump, twojumps, threejumps } = checkbox
    const result = []
    const nojumpsTickets = tickets.filter(
      (ticket) => ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0
    )
    const onejumpTickets = tickets.filter(
      (ticket) => ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1
    )
    const twojumpsTickets = tickets.filter(
      (ticket) => ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2
    )
    const threejumpsTickets = tickets.filter(
      (ticket) => ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3
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
        {!nomoreTicketsToLoad && <LinearIndeterminate />}
        {ticketsToRenderWithStops(tickets).length !== 0 ? (
          visibleTickets(ticketsToRenderWithStops(tickets), filter, nomoreTicketsToLoad, ticketsToRender).map(
            (ticket) => {
              return <Ticket ticket={ticket} key={ticket.price + ticket.carrier + ticket.segments[0].date} />
            }
          )
        ) : (
          <h2>No tickets were found</h2>
        )}
      </section>
      <ShowMoreButton hidden={ticketsToRenderWithStops(tickets).length === 0} />
    </>
  )
}

const mapStateToProps = ({ tickets, loading, searchId, ticketsToRender, nomoreTicketsToLoad, filter, checkbox }) => {
  return {
    filter,
    tickets,
    loading,
    searchId,
    ticketsToRender,
    nomoreTicketsToLoad,
    checkbox,
  }
}

const mapDispatchToProps = {
  asyncTicketRequested,
  ticketsError,
  getTickets,
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(TicketList)
