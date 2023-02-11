import React from 'react';
import logo from './logo.svg';
import './stylesheets/App.scss';
import Login from './components/Login';
import Home from './components/Home';
import './stylesheets/Login.scss';

function App() {
  return (
    <div className="App">

      {/* <Login /> */}
      <Home />

    </div>
  );
}

export default App;
