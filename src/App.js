import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import { Counter } from './features/counter/Counter';
import InitialPage from './Components/Initial';
import GamePage from './Components/Game';
import ScorePage from './Components/Score';
import './App.scss';

const App = () => {
  return (
    <div className='App w-75 text-center d-flex'>
      <div className='align-self-center text-center w-100'>
        <Router>
          <Switch>
            <Route exact path='/game' component={GamePage} />
            <Route exact path='/score' component={ScorePage} />
            <Route path='/' component={InitialPage} />
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
