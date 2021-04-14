import './App.css';

import Home from './views/Home'
import About from './views/About'
import Login from './views/Login'

import NavigationBar from './components/NavigationBar'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <NavigationBar/>
        
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/login" component={Login}/> 
      </div>
    </Router>
  );
}

export default App;
