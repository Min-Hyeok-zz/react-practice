import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header, Footer, Main, SignUp, SignIn } from './pages'

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Header/>
        <div className="content">
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/signin" component={SignIn}/>
            </Switch>
        </div>
        <Footer/>
      </React.Fragment>
    </Router>
  )
}

export default App
