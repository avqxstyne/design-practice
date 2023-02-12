import React from 'react';
import logo from './logo.svg';
import Login from './components/Login';
import Home from './components/Home';
import './stylesheets/App.scss';
import './stylesheets/Login.scss';
import './stylesheets/Home.scss';

function App() {
  return (
    <div className="App">

      {/* <Login /> */}
      <Home />

    </div>
  );
}

export default App;
