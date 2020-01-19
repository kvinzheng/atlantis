import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import ProgramList from './components/program/program-list';
import StudentList from './components/student/studentList';
import ApplicationList from './components/application/applicationList';
import ProgramDetail from './components/program-detail/program-detail';
import StudentDetail from './components/student-detail/student-detail';
import ApplicationDetail from './components/application-detail/application-detail';

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
        <Route path="/applications" component={ApplicationList} />
        <Route exact path="/program/:programId" component={ProgramDetail} />
        <Route exact path="/student/:studentId" component={StudentDetail} />
        <Route exact path="/application/:applicationId" component={ApplicationDetail} />
        <Redirect from="/" to="/programs" />
      </NavBar>
    </div>
  </BrowserRouter>
);

export default App;
