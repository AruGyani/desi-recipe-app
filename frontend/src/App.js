import React from 'react';
import './App.css';

import Home from './views/Home'
import About from './views/About'
import Login from './views/Login'
import NavigationBar from './components/NavigationBar'

import { Route } from 'react-router-dom'

function App() {  
  return (
    <div>
      <NavigationBar/>

      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/login" exact component={Login}/>
    </div>
  );
}

export default App;
