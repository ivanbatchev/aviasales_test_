import React from 'react'
import { connect } from 'react-redux'

import { filterChanged } from '../../actions'

import classes from './TicketsFilter.module.scss'

const TicketsFilter = ({ filter, filterChanged }) => {
  const buttons = [
    { name: 'CHEAPEST', label: 'Cамый дешевый' },
    { name: 'FASTEST', label: 'Самый быстрый' },
    { name: 'OPTIMAL', label: 'Оптимальный' },
  ]

  const buttonsToRender = buttons.map(({ name, label }) => {
    const isActive = filter === name
    return (
      <button
        onClick={() => {
          filterChanged(name)
        }}
        key={name}
        className={isActive ? classes.active : undefined}
      >
        {label}
      </button>
    )
  })

  return <div className={classes.wrapper}>{buttonsToRender}</div>
}

const mapStateToProps = ({ filter }) => {
  return {
    filter,
  }
}

const mapDispatchToProps = {
  filterChanged,
}
export default connect(mapStateToProps, mapDispatchToProps)(TicketsFilter)
