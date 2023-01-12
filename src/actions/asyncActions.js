import { ticketsRequested, ticketsLoaded, ticketsError } from '../actions'
import TicketService from '../services/ticketService'
import store from '../store'

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

export const getTickets = () => {
  return (dispatch) => {
    if (!store.getState().stopLoading) {
      ticketService.getTickets(store.getState().searchId).then((result) => {
        try {
          if (result.tickets) {
            dispatch(ticketsLoaded(result.tickets, result.stop))
          }
        } catch (e) {
          console.log(e)
        }
      })
    }
  }
}
// store.subscribe(() => {
//   if (store.getState().searchId) {
//     const searchId = store.getState().searchId
//     ticketService.getTickets(searchId).then((res) => {
//       try {
//         res.json().then((result) => {
//           dispatch(ticketsLoaded(result.tickets, result.stop))
//         })
//       } catch (error) {
//         console.log(error)
//       }
//     })
//   }
// })
