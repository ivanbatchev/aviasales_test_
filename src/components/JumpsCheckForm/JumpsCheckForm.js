import React from 'react'

import classes from './JumpsCheckForm.module.scss'

const JumpsCheckForm = () => {
  return (
    <form className={classes.form}>
      <h4>Количество пересадок</h4>
      <label>
        <input type="checkbox" />
        Все
      </label>
      <label>
        <input type="checkbox" />
        Без пересадок
      </label>
      <label>
        <input type="checkbox" />1 пересадка
      </label>
      <label>
        <input type="checkbox" />2 пересадки
      </label>
      <label>
        <input type="checkbox" />3 пересадки
      </label>
    </form>
  )
}
export default JumpsCheckForm
