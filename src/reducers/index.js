const initialState = {
  tickets: [],
  loading: true,
  error: null,
  filter: {
    all: false,
    nojumps: false,
    onejump: false,
    twojumps: false,
    threejumps: false,
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TICKETS_LOADED':
      return {
        tickets: action.payload,
        loading: false,
        error: null,
        filter: state.filter,
      }

    case 'TICKETS_REQUESTED':
      return {
        tickets: state.tickets,
        loading: true,
        error: null,
        filter: state.filter,
      }

    case 'TICKETS_ERROR':
      return {
        tickets: state.tickets,
        loading: false,
        error: action.payload,
        filter: state.filter,
      }

    case 'FILTER_CHANGED':
      return { ...state, loading: false, filter: action.payload }

    default:
      return state
  }
}

export default reducer
