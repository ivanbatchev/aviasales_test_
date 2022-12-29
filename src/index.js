import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import ErrorBoundary from './components/ErrorBoundary'
import TicketService from './services/ticketService'
import { TicketServiceProvider } from './components/TicketServiceContext'
import store from './store'
import './index.scss'
import App from './App'

const ticketService = new TicketService()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <TicketServiceProvider value={ticketService}>
        <App />
      </TicketServiceProvider>
    </ErrorBoundary>
  </Provider>
)
