import React from 'react'

import classes from './ErrorIndicator.module.scss'

const ErrorIndicator = () => {
  return (
    <div className={classes.error}>
      Error. Sorry for that!
      <br /> Try to reaload this page
    </div>
  )
}

export default ErrorIndicator
