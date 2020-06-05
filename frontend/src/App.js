import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterForm from "./components/RegisterForm.component";
import HomePage from "./components/HomePage.component";

export default class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    console.log("render method in App.js ran");
    return (
      <div>
        <Router>
          <Route path="/" exact component={HomePage}></Route>
        </Router>
      </div>
    );
  }
};
