import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import InitialPage from './Components/InitialPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <InitialPage />
      </header>
    </div>
  );
}

export default App;
