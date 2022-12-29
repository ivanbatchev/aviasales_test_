import React from 'react'
import { connect } from 'react-redux'

import { filterChanged } from '../../actions'

import classes from './JumpsCheckForm.module.scss'

const JumpsCheckForm = ({ filter, filterChanged }) => {
  const handleFilterChange = ({ target }) => {
    const allFiltersChecked = { all: true, nojumps: true, onejump: true, twojumps: true, threejumps: true }

    const allFiltersUnchecked = { all: false, nojumps: false, onejump: false, twojumps: false, threejumps: false }

    const currentStateWithNoAll = {
      nojumps: document.getElementById('nojumps').checked,
      onejump: document.getElementById('onejump').checked,
      twojumps: document.getElementById('twojumps').checked,
      threejumps: document.getElementById('threejumps').checked,
    }

    switch (target.id) {
      case 'all':
        if (target.checked) {
          filterChanged(allFiltersChecked)
        } else {
          filterChanged(allFiltersUnchecked)
        }
        break
      default:
        if (filter.all && target.id) {
          filterChanged({ ...filter, all: false, [target.id]: !filter[target.id] })
        }
        if (!filter.all && target.id) {
          filterChanged({ ...filter, all: false, [target.id]: !filter[target.id] })
        }
        if (!filter.all) {
          if (Object.values(currentStateWithNoAll).every((value) => value === true)) {
            filterChanged(allFiltersChecked)
          }
        }
    }
  }

  return (
    <aside className={classes.aside}>
      <form className={classes.form}>
        <h4>Количество пересадок</h4>
        <div className={classes.cbcontainer}>
          <input type="checkbox" id="all" checked={filter.all} onChange={handleFilterChange} />
          <span className={classes.checkmark}></span>
          <label htmlFor="all">Все</label>
        </div>
        <div className={classes.cbcontainer}>
          <input type="checkbox" id="nojumps" checked={filter.nojumps} onChange={handleFilterChange} />
          <span className={classes.checkmark}></span>
          <label htmlFor="nojumps">Без пересадок</label>
        </div>
        <div className={classes.cbcontainer}>
          <input type="checkbox" id="onejump" checked={filter.onejump} onChange={handleFilterChange} />
          <span className={classes.checkmark}></span>
          <label htmlFor="onejump">1 пересадка</label>
        </div>
        <div className={classes.cbcontainer}>
          <input type="checkbox" id="twojumps" checked={filter.twojumps} onChange={handleFilterChange} />
          <span className={classes.checkmark}></span>
          <label htmlFor="twojumps">2 пересадки</label>
        </div>
        <div className={classes.cbcontainer}>
          <input type="checkbox" id="threejumps" checked={filter.threejumps} onChange={handleFilterChange} />
          <span className={classes.checkmark}></span>
          <label htmlFor="threejumps">3 пересадки</label>
        </div>
      </form>
    </aside>
  )
}

const mapStateToProps = ({ filter, tickets }) => {
  return {
    filter,
    tickets,
  }
}

const mapDispatchToProps = {
  filterChanged,
}
export default connect(mapStateToProps, mapDispatchToProps)(JumpsCheckForm)
