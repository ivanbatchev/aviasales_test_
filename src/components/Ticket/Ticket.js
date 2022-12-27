import React from 'react'

import { S7Logo } from '../../assets/images'

import classes from './Ticket.module.scss'

const rowElement = (
  <div className={classes.row}>
    <div>
      <span>MOW - HKT</span>
      <span>10:45 - 08:00</span>
    </div>
    <div>
      <span>В ПУТИ</span>
      <span>21ч 15м</span>
    </div>
    <div>
      <span>2 пересадки</span>
      <span>HKG, JNG</span>
    </div>
  </div>
)

const Ticket = () => {
  return (
    <div className={classes.ticket}>
      <div className={classes.wrapper}>
        <header className={classes.header}>
          <span>13 400 P</span> <img src={S7Logo} alt="s7 logo" />
        </header>
        <main className={classes.main}>
          {rowElement}
          {rowElement}
        </main>
      </div>
    </div>
  )
}

export default Ticket
