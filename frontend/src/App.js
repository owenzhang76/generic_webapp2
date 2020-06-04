import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import registerForm from "./components/registerForm.component";

export default class App extends React.Component{
  constructor(props) {

  }

  render() {
    console.log("render method in App.js ran");
    return (
      <div>
        <Router>
          <Route path="/" exact component={registerForm}></Route>
        </Router>
      </div>
    );
  }
};
