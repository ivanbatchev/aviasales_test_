// https://aviasales-test-api.kata.academy/

export default class TicketService {
  data = [
    { price: '15 000 P', carrier: 'S7', duration: '11ч 20м', id: 1 },
    { price: '98 000 P', carrier: '85', duration: '12ч 20м', id: 2 },
    { price: '89 000 P', carrier: 'Ural Air', duration: '18ч 20м', id: 3 },
    { price: '1 000 P', carrier: '879', duration: '12ч 20м', id: 4 },
    { price: '72 000 P', carrier: 'UTA', duration: '18ч 20м', id: 6 },
  ]

  getTickets = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('BAD SHIT HAPPENED'))
        }
        resolve(this.data)
      }, 1000)
    })
  }
}

// getSearchId = async () => {
//   const response = await fetch('https://aviasales-test-api.kata.academy/search')
//   if (response.ok) {
//     return await (
//       await response.json()
//     ).searchId
//   }
// }

//   getTickets = async (searchId) => {
//     const tickets = await (await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)).json()
//     return tickets.tickets.slice(0, 5)
//   }

// const getLogos = async () => {
//   const result = await getTickets()
//   return result.map((item) => {
//     return `https://pics.avs.io/99/36/${item.carrier}.png`
//   })
// }

// const getPrices = async () => {
//   const result = await getTickets()
//   return result.map((item) => {
//     const formatedPrice = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' })
//       .format(item.price)
//       .slice(0, -5)
//     const resultPrice = formatedPrice + ' Р'
//     return resultPrice
//   })
// }

// console.log(getPrices())
