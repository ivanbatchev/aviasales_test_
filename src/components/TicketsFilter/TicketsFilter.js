import React from 'react'

import classes from './TicketsFilter.module.scss'

const TicketsFilter = () => {
  return (
    <div className={classes.wrapper}>
      <button className={classes.active}>Самый дешевый</button>
      <button>Самый быстрый</button>
      <button>Оптимальный</button>
    </div>
  )
}
export default TicketsFilter
