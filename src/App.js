import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Search from './pages/search'
import {GlobalStyles} from './globalStyles'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyles />
      <Route path='/login' exact>
        <Login />
      </Route>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/search' exact>
        <Search />
      </Route>
    </BrowserRouter>
  )
}

export default App
