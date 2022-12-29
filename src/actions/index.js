const ticketsLoaded = (newTickets) => {
  return {
    type: 'TICKETS_LOADED',
    payload: newTickets,
  }
}

const ticketsRequested = () => {
  return {
    type: 'TICKETS_REQUESTED',
  }
}

const ticketsError = (error) => {
  return {
    type: 'TICKETS_ERROR',
    payload: error,
  }
}

const filterChanged = (filterState) => {
  return {
    type: 'FILTER_CHANGED',
    payload: filterState,
  }
}

export { ticketsLoaded, ticketsRequested, ticketsError, filterChanged }
