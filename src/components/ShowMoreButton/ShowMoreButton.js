import React from 'react'
import { connect } from 'react-redux'

import { changeTicketsNumber } from '../../actions'

import classes from './ShowMoreButton.module.scss'

const ShowMoreButton = ({ changeTicketsNumber, hidden }) => {
  return (
    <button
      className={classes.more}
      hidden={hidden}
      onClick={() => {
        changeTicketsNumber()
      }}
    >
      Показать еще 5 билетов!
    </button>
  )
}

const mapStateToProps = ({ ticketsToRender }) => {
  return {
    ticketsToRender,
  }
}

const mapDispatchToProps = {
  changeTicketsNumber,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton)
