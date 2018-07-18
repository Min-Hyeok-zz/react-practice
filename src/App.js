import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header, Footer, Main } from './pages'
import './css/common.css'
const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Header/>
        <div className="content">
            <Switch>
              <Route exact path="/" component={Main}/>
            </Switch>
        </div>
        <Footer/>
      </React.Fragment>
    </Router>
  )
}

export default App
