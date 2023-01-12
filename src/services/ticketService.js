export default class TicketService {
  urlBase = 'https://aviasales-test-api.kata.academy'
  controller = new AbortController()

  getSearchId = async () => {
    const response = await fetch(`${this.urlBase}/search`, { signal: this.controller.signal })
    if (response.ok) {
      const result = await response.json()
      return result.searchId
    }
    this.controller.abort()
  }

  getTickets = async (searchId) => {
    const response = await fetch(`${this.urlBase}/tickets?searchId=${searchId}`, { signal: this.controller.signal })
    if (response.ok) {
      const result = await response.json()
      return result
    }
    if (!response.ok) {
      return { tickets: [], stop: false }
    }
    this.controller.abort()
  }
}
