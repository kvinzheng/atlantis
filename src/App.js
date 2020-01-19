import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProgramList from './components/program/programList';
import StudentList from './components/student/studentList';

import NavBar from './components/nav-bar/nav-bar';

import './App.css';
import "./static/css/base.css";
import "semantic-ui-css/semantic.min.css";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <NavBar>
        <Route path="/programs" component={ProgramList} />
        <Route path="/students" component={StudentList} />
      </NavBar>
    </div>
  </BrowserRouter>
);

export default App;
