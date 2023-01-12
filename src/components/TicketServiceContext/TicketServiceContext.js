import React from 'react'

const TicketContext = React.createContext()
const { Provider: TicketServiceProvider, Consumer: TicketServiceConsumer } = TicketContext

export { TicketServiceProvider, TicketServiceConsumer }
export default TicketContext
