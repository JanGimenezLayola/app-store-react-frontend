import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 

import Home from './pages/Home.js';
import AppList from './pages/AppList.js';
import NotFound from './pages/NotFound.js';

import 'milligram';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/apps' exact component={AppList} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
