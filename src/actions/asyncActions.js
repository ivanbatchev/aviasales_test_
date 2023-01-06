import { ticketsRequested, ticketsLoaded, ticketsError } from '../actions'
import TicketService from '../services/ticketService'

const ticketService = new TicketService()

export const asyncTicketRequested = () => {
  return (dispatch) => {
    ticketService
      .getSearchId()
      .then((searchId) => {
        dispatch(ticketsRequested(searchId))
      })
      .catch((error) => {
        dispatch(ticketsError(error))
      })
  }
}

export const getTickets = (searchId) => {
  return (dispatch) => {
    ticketService
      .getTickets(searchId)
      .then((tickets) => {
        dispatch(ticketsLoaded(tickets.tickets, tickets.stop))
      })
      .catch((error) => {
        dispatch(ticketsError(error))
      })
  }
}
