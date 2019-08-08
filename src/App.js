import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import routes from './routes'

function renderRoutes() {
  return routes.map((route, idx) => {
    return (
      <Route
        key={idx}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    )
  })
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {renderRoutes()}
      </div>
    </BrowserRouter>
  )
}

export default App
