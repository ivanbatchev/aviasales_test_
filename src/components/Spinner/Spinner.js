import React from 'react'
import { Spin } from 'antd'

import classes from './Spinner.module.scss'

const Spinner = () => {
  return (
    <div className={classes.spinner}>
      <Spin size="large" />
    </div>
  )
}

export default Spinner
