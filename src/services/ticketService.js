export default class TicketService {
  getSearchId = async () => {
    try {
      const response = await fetch('https://aviasales-test-api.kata.academy/search')
      const result = await response.json()
      return result.searchId
    } catch (error) {
      throw new Error('can not get search id', error)
    }
  }

  getTickets = async (searchId) => {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    if (response.status === 200) {
      const result = await response.json()
      return result
    } else {
      return new Error('can not get tickets')
    }
  }
}
