import React from 'react'
import { connect } from 'react-redux'

import { checkboxChanged } from '../../actions'

import classes from './JumpsCheckForm.module.scss'

const JumpsCheckForm = ({ checkbox, checkboxChanged }) => {
  const handleCheckboxChange = ({ target }) => {
    const allCheckboxesChecked = { all: true, nojumps: true, onejump: true, twojumps: true, threejumps: true }

    const allCheckboxesUnchecked = { all: false, nojumps: false, onejump: false, twojumps: false, threejumps: false }

    const currentStateWithNoAll = {
      nojumps: document.getElementById('nojumps').checked,
      onejump: document.getElementById('onejump').checked,
      twojumps: document.getElementById('twojumps').checked,
      threejumps: document.getElementById('threejumps').checked,
    }

    switch (target.id) {
      case 'all':
        if (target.checked) {
          checkboxChanged(allCheckboxesChecked)
        } else {
          checkboxChanged(allCheckboxesUnchecked)
        }
        break
      default:
        if (checkbox.all && target.id) {
          checkboxChanged({ ...checkbox, all: false, [target.id]: !checkbox[target.id] })
        }
        if (!checkbox.all && target.id) {
          checkboxChanged({ ...checkbox, all: false, [target.id]: !checkbox[target.id] })
        }
        if (!checkbox.all && Object.values(currentStateWithNoAll).every((value) => value === true)) {
          checkboxChanged(allCheckboxesChecked)
        }
    }
  }

  return (
    <aside className={classes.aside}>
      <form className={classes.form}>
        <h4>Количество пересадок</h4>
        <div className={classes.cbcontainer}>
          <input type="checkbox" id="all" checked={checkbox.all} onChange={handleCheckboxChange} />
          <span className={classes.checkmark}></span>
          <label htmlFor="all">Все</label>
        </div>
        <div className={classes.cbcontainer}>
          <input type="checkbox" id="nojumps" checked={checkbox.nojumps} onChange={handleCheckboxChange} />
          <span className={classes.checkmark}></span>
          <label htmlFor="nojumps">Без пересадок</label>
        </div>
        <div className={classes.cbcontainer}>
          <input type="checkbox" id="onejump" checked={checkbox.onejump} onChange={handleCheckboxChange} />
          <span className={classes.checkmark}></span>
          <label htmlFor="onejump">1 пересадка</label>
        </div>
        <div className={classes.cbcontainer}>
          <input type="checkbox" id="twojumps" checked={checkbox.twojumps} onChange={handleCheckboxChange} />
          <span className={classes.checkmark}></span>
          <label htmlFor="twojumps">2 пересадки</label>
        </div>
        <div className={classes.cbcontainer}>
          <input type="checkbox" id="threejumps" checked={checkbox.threejumps} onChange={handleCheckboxChange} />
          <span className={classes.checkmark}></span>
          <label htmlFor="threejumps">3 пересадки</label>
        </div>
      </form>
    </aside>
  )
}

const mapStateToProps = ({ checkbox, tickets }) => {
  return {
    checkbox,
    tickets,
  }
}

const mapDispatchToProps = {
  checkboxChanged,
}
export default connect(mapStateToProps, mapDispatchToProps)(JumpsCheckForm)
