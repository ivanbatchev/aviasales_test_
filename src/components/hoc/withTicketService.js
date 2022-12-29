/* eslint-disable react/display-name */
import React from 'react'

import { TicketServiceConsumer } from '../TicketServiceContext'

const withTicketService = () => (Wrapped) => {
  return (props) => {
    return (
      <TicketServiceConsumer>
        {(ticketService) => {
          return <Wrapped {...props} ticketService={ticketService} />
        }}
      </TicketServiceConsumer>
    )
  }
}

export { withTicketService }
