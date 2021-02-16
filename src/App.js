import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import { Counter } from './features/counter/Counter';
import InitialPage from './Components/Initial';
import GamePage from './Components/Game';
import ScorePage from './Components/Score';
import './App.scss';

const App = () => {
  return (
    <div className='App w-100 text-center d-flex'>
      <div className='backdrop w-100'>
        <div className='content p-3 w-50'>
          <Router>
            <Switch>
              <Route exact path='/game' component={GamePage} />
              <Route exact path='/score' component={ScorePage} />
              <Route path='/' component={InitialPage} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  )
}

export default App
