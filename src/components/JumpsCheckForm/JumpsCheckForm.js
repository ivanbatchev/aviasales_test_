import React, { useState } from 'react'
import { connect } from 'react-redux'

import { checkboxChanged } from '../../actions'

import classes from './JumpsCheckForm.module.scss'

const JumpsCheckForm = ({ checkbox, checkboxChanged }) => {
  const [filtersState, setFiltersState] = useState({
    all: true,
    nojumps: true,
    onejump: true,
    twojumps: true,
    threejumps: true,
  })
  const handleChekboxes = ({ target: checkboxTarget }) => {
    let result = {}
    const allFiltersChecked = { all: true, nojumps: true, onejump: true, twojumps: true, threejumps: true }
    const noFiltersChecked = { all: false, nojumps: false, onejump: false, twojumps: false, threejumps: false }
    if (checkboxTarget.id === 'all') {
      if (checkboxTarget.checked) {
        result = allFiltersChecked
        setFiltersState(allFiltersChecked)
      } else {
        result = noFiltersChecked
        setFiltersState(noFiltersChecked)
      }
    } else {
      result = { ...filtersState, all: false, [checkboxTarget.id]: !filtersState[checkboxTarget.id] }
      setFiltersState({ ...filtersState, all: false, [checkboxTarget.id]: !filtersState[checkboxTarget.id] })
      const { all, ...otherfiltersState } = result
      if (!all && Object.values(otherfiltersState).every((value) => value === true)) {
        result = allFiltersChecked
        setFiltersState(allFiltersChecked)
      }
    }
    checkboxChanged(result)
  }

  return (
    <aside className={classes.aside}>
      <form className={classes.form}>
        <h4>Количество пересадок</h4>
        <div className={classes.cbcontainer}>
          <input type="checkbox" id="all" onChange={handleChekboxes} checked={checkbox.all} />
          <span className={classes.checkmark}></span>
          <label htmlFor="all">Все</label>
        </div>
        <div className={classes.cbcontainer}>
          <input type="checkbox" id="nojumps" onChange={handleChekboxes} checked={checkbox.nojumps} />
          <span className={classes.checkmark}></span>
          <label htmlFor="nojumps">Без пересадок</label>
        </div>
        <div className={classes.cbcontainer}>
          <input type="checkbox" id="onejump" onChange={handleChekboxes} checked={checkbox.onejump} />
          <span className={classes.checkmark}></span>
          <label htmlFor="onejump">1 пересадка</label>
        </div>
        <div className={classes.cbcontainer}>
          <input type="checkbox" id="twojumps" onChange={handleChekboxes} checked={checkbox.twojumps} />
          <span className={classes.checkmark}></span>
          <label htmlFor="twojumps">2 пересадки</label>
        </div>
        <div className={classes.cbcontainer}>
          <input type="checkbox" id="threejumps" onChange={handleChekboxes} checked={checkbox.threejumps} />
          <span className={classes.checkmark}></span>
          <label htmlFor="threejumps">3 пересадки</label>
        </div>
      </form>
    </aside>
  )
}

const mapStateToProps = ({ checkbox }) => {
  return {
    checkbox,
  }
}

const mapDispatchToProps = {
  checkboxChanged,
}
export default connect(mapStateToProps, mapDispatchToProps)(JumpsCheckForm)
