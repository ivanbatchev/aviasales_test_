import React from 'react'
import { add, differenceInMinutes } from 'date-fns'

import classes from './Ticket.module.scss'

const FlightInfo = ({ info }) => {
  const [forawardInfo, backwardInfo] = info

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

  return (
    <>
      <div className={classes.row}>
        <div style={{ width: '88px' }}>
          <span>{`${forawardInfo.origin} - ${forawardInfo.destination}`}</span>
          <span>{getFlightTime(forawardInfo.date, forawardInfo.duration)}</span>
        </div>
        <div style={{ width: '56px' }}>
          <span>В ПУТИ</span>
          <span>{getTimeDuration(forawardInfo.date, forawardInfo.duration)}</span>
        </div>
        <div style={{ width: '88px' }}>
          <span>{getStopsLabel(forawardInfo.stops)}</span>
          <span>{getStopsList(forawardInfo.stops)}</span>
        </div>
      </div>
      <div className={classes.row}>
        <div style={{ width: '88px' }}>
          <span>{`${backwardInfo.origin} - ${backwardInfo.destination}`}</span>
          <span>{getFlightTime(backwardInfo.date, backwardInfo.duration)}</span>
        </div>
        <div style={{ width: '56px' }}>
          <span>В ПУТИ</span>
          <span>{getTimeDuration(backwardInfo.date, backwardInfo.duration)}</span>
        </div>
        <div style={{ width: '88px' }}>
          <span>{getStopsLabel(backwardInfo.stops)}</span>
          <span>{getStopsList(backwardInfo.stops)}</span>
        </div>
      </div>
    </>
  )
}

const Ticket = ({ ticket }) => {
  const { price, carrier, segments } = ticket

  const formatedPrice = (price) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(price).slice(0, -5) + ' P'
  }

  const imageSrc = (carrier) => {
    return `https://pics.avs.io/99/36/${carrier}.png`
  }

  return (
    <div className={classes.ticket}>
      <div className={classes.wrapper}>
        <header className={classes.header}>
          <span>{formatedPrice(price)}</span> <img src={imageSrc(carrier)} alt={carrier} />
        </header>
        <main className={classes.main}>
          <FlightInfo info={segments} />
        </main>
      </div>
    </div>
  )
}

export default Ticket
