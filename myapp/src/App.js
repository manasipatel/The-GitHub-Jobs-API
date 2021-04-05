import React, { useEffect, useState } from 'react';
import './App.css';
import JobItem from './jobitem';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import JobList from './joblist';
import JobDetails from './jobdetails';
//import { useHistory } from 'react-router-dom'

const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <JobList/>
          </Route>
          {/* <Route path="/details">
            <JobDetails></JobDetails>
          </Route> */}
        </Switch>
    </Router>
  );
  //let history = useHistory();

}

export default App;
