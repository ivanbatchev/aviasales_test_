import {
  TICKETS_LOADED,
  TICKETS_REQUESTED,
  TICKETS_ERROR,
  CHECKBOX_CHANGED,
  FILTER_CHANGED,
  TICKETS_TO_SHOW_CHANGED,
} from './actionTypes'

const ticketsLoaded = (newTickets, stop) => {
  return {
    type: TICKETS_LOADED,
    payload: newTickets,
    meta: stop,
  }
}

const ticketsRequested = (searchId) => {
  return {
    type: TICKETS_REQUESTED,
    payload: searchId,
  }
}

const ticketsError = (error) => {
  return {
    type: TICKETS_ERROR,
    payload: error,
  }
}

const checkboxChanged = (checkboxStates) => {
  return {
    type: CHECKBOX_CHANGED,
    payload: checkboxStates,
  }
}

const filterChanged = (filterState) => {
  return {
    type: FILTER_CHANGED,
    payload: filterState,
    meta: 5,
  }
}

const changeTicketsNumber = () => {
  return {
    type: TICKETS_TO_SHOW_CHANGED,
    payload: 5,
  }
}

export { ticketsLoaded, ticketsRequested, ticketsError, checkboxChanged, filterChanged, changeTicketsNumber }
