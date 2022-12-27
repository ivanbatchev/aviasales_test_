import React from 'react'

import { logo } from '../../assets/images'

import classes from './Header.module.scss'

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" className={classes.logo}></img>
    </header>
  )
}

export default Header
