import React, { useState } from 'react'

import { dataContext } from './DataContext'
import Header from './components/Header'
import classes from './App.module.scss'
import Main from './components/Main'

const App = () => {
  const [data, setData] = useState({ amount: 12 })
  return (
    <dataContext.Provider value={{ data, setData }}>
      <div className={classes.app}>
        <Header />
        <Main />
      </div>
    </dataContext.Provider>
  )
}
export default App
