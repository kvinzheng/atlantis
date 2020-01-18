import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Programs from './components/search-bar/programs';
import NavBar from './components/nav-bar/nav-bar';

import './App.css';
import "./static/css/base.css";
import "semantic-ui-css/semantic.min.css";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <NavBar>
        <Route path="/programs" component={Programs} />
      </NavBar>
    </div>
  </BrowserRouter>
);

export default App;
