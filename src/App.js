import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 

import Home from './pages/Home.js';
import AppList from './pages/AppList.js';
import NotFound from './pages/NotFound.js';
import CreateApp from './pages/CreateApp.js';

import Navbar from './components/Navbar'

import 'milligram';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/apps' exact component={AppList} />
          <Route path='/apps/create' exact component={CreateApp} />          
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
