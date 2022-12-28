import React from 'react'

import classes from './JumpsCheckForm.module.scss'

const JumpsCheckForm = () => {
  return (
    <aside className={classes.aside}>
      <form className={classes.form}>
        <h4>Количество пересадок</h4>
        <div className={classes.cbcontainer}>
          <input type="checkbox" id="all" />
          <span className={classes.checkmark}></span>
          <label htmlFor="all">Все</label>
        </div>
        <div className={classes.cbcontainer}>
          <input type="checkbox" id="nojumps" />
          <span className={classes.checkmark}></span>
          <label htmlFor="nojumps">Без пересадок</label>
        </div>
        <div className={classes.cbcontainer}>
          <input type="checkbox" id="onejump" />
          <span className={classes.checkmark}></span>
          <label htmlFor="onejump">1 пересадка</label>
        </div>
        <div className={classes.cbcontainer}>
          <input type="checkbox" id="twojumps" />
          <span className={classes.checkmark}></span>
          <label htmlFor="twojumps">2 пересадки</label>
        </div>
        <div className={classes.cbcontainer}>
          <input type="checkbox" id="threejumps" />
          <span className={classes.checkmark}></span>
          <label htmlFor="threejumps">3 пересадки</label>
        </div>
      </form>
    </aside>
  )
}
export default JumpsCheckForm
