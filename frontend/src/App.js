import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar'
import useToken from './components/useToken'

import Home from './views/Home'
import About from './views/About'

// eslint-disable-next-line
import Login from './views/Login'
// eslint-disable-next-line
import Dashboard from './views/Dashboard'

import { Route } from 'react-router-dom'

function App() {  
  // eslint-disable-next-line
  const {token, setToken} = useToken();

  return (
    <div>
      <NavigationBar token={token}/>

      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/login" exact component={() => <Login token={token} setToken={setToken}/>}/>
      <Route path="/dashboard" exact component={() => <Dashboard token={token} setToken={setToken}/>}/>
    </div>
  );
}

export default App;
