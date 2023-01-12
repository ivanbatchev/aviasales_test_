import React from 'react'

import { getFlightTime, getTimeDuration, getStopsLabel, getStopsList, formatedPrice, imageSrc } from './/../../utils'
import classes from './Ticket.module.scss'

const FlightInfo = ({ info }) => {
  const [forawardInfo, backwardInfo] = info
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
