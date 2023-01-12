import { add, differenceInMinutes } from 'date-fns'

const formatToHoursMinutes = (date) => {
  return `${date.getHours().toString().length === 1 ? '0' + date.getHours() : date.getHours()}:${
    date.getMinutes().toString().length === 1 ? '0' + date.getMinutes() : date.getMinutes()
  }`
}

function timeConvert(n) {
  var num = n
  var hours = num / 60
  var rhours = Math.floor(hours)
  var minutes = (hours - rhours) * 60
  var rminutes = Math.round(minutes)
  return rhours + 'ч ' + rminutes + 'м'
}

const getFlightTime = (date, duration) => {
  const departureTime = new Date(date)
  const firstTime = formatToHoursMinutes(departureTime)
  const secondTime = formatToHoursMinutes(add(departureTime, { minutes: duration }))
  return `${firstTime} - ${secondTime}`
}

const getTimeDuration = (date, duration) => {
  const startDate = new Date(date)
  const stopDate = add(startDate, { minutes: duration })
  const diffInMinutes = differenceInMinutes(stopDate, startDate)
  return timeConvert(diffInMinutes)
}

const getStopsLabel = (stops) => {
  const numberOfStops = stops.length
  switch (numberOfStops) {
    case 0:
      return 'Без пересадок'
    case 1:
      return '1 пересадка'
    case 2:
      return '2 пересадки'
    case 3:
      return '3 пересадки'
    default:
      return 'Ошибка получения'
  }
}

const getStopsList = (stops) => {
  return [...stops].join(', ')
}
const formatedPrice = (price) => {
  return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(price).slice(0, -5) + ' P'
}

const imageSrc = (carrier) => {
  return `https://pics.avs.io/99/36/${carrier}.png`
}
export { getFlightTime, getTimeDuration, getStopsLabel, getStopsList, formatedPrice, imageSrc }
