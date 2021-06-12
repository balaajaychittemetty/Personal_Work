import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Genre from './components/pages/Genre';
import Language from './components/pages/Language';
import SignUp from './components/pages/SignUp'
import Login from './components/pages/Login';
import Signup from './components/pages/SignUp';
import MovieDetails from './components/pages/MovieDetails'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Genre' component={Genre} />
        <Route path='/Languages' component={Language} />
        <Route path="/MovieDetails" component={MovieDetails} />
    <Route path='/login' component={Login} />
    <Route path='/signup' component={Signup} />
    
        
      </Switch>
    </Router>
  );
}

export default App;