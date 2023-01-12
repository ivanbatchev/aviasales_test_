import React from 'react'

import Header from './components/Header'
import classes from './App.module.scss'
import Main from './components/Main'

const App = () => {
  return (
    <div className={classes.app}>
      <Header />
      <Main />
    </div>
  )
}
export default App
