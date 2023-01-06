const initialState = {
  tickets: [],
  nomoreTicketsToLoad: false,
  searchId: '',
  loading: true,
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
    case 'TICKETS_LOADED': {
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
        loading: false,
        nomoreTicketsToLoad: action.meta,
      }
    }

    case 'TICKETS_REQUESTED':
      return {
        ...state,
        loading: true,
        searchId: action.payload,
      }

    case 'TICKETS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case 'CHECKBOX_CHANGED':
      return { ...state, loading: false, checkbox: action.payload }

    case 'FILTER_CHANGED':
      return { ...state, loading: false, filter: action.payload, ticketsToRender: action.meta }

    case 'TICKETS_TO_SHOW_CHANGED':
      return { ...state, loading: false, ticketsToRender: state.ticketsToRender + action.payload }

    case 'FILTER_CHANGED_RESET_SHOWN_TICKETS': {
      return { ...state, loading: false, ticketsToRender: 5 }
    }
    default:
      return state
  }
}

export default reducer
