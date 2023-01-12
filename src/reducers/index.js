import {
  TICKETS_LOADED,
  TICKETS_REQUESTED,
  TICKETS_ERROR,
  CHECKBOX_CHANGED,
  FILTER_CHANGED,
  TICKETS_TO_SHOW_CHANGED,
} from '../actions/actionTypes'

const initialState = {
  tickets: [],
  stopLoading: false,
  searchId: null,
  status: 'loading',
  error: null,
  checkbox: {
    all: true,
    nojumps: true,
    onejump: true,
    twojumps: true,
    threejumps: true,
  },
  filter: 'CHEAPEST',
  ticketsToRender: 5,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TICKETS_LOADED: {
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
        status: 'success',
        stopLoading: action.meta,
      }
    }

    case TICKETS_REQUESTED:
      return {
        ...state,
        status: 'loading',
        searchId: action.payload,
      }

    case TICKETS_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload,
      }

    case CHECKBOX_CHANGED:
      return { ...state, status: 'success', checkbox: action.payload }

    case FILTER_CHANGED:
      return { ...state, status: 'success', filter: action.payload, ticketsToRender: action.meta }

    case TICKETS_TO_SHOW_CHANGED:
      return { ...state, status: 'success', ticketsToRender: state.ticketsToRender + action.payload }

    default:
      return state
  }
}

export default reducer
