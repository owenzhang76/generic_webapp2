import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage.component";
import OnboardPage from "./components/Onboard.component";

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.passRegisterInfo = this.passRegisterInfo.bind(this);
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
    };
  }

  passRegisterInfo(registerInfo) {
    console.log("passRegisterInfo ran");
    this.setState({
      username: registerInfo.username,
      firstname: registerInfo.firstname,
      lastname: registerInfo.lastname,
      email: registerInfo.email,
    });
  }

  render() {

    let registerFormInfo = {
      username: this.state.username,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
    }
    
    return (
      <div>
        <Router>
          <Route exact path='/onboard' render={props => (<OnboardPage {...props} registerFormInfo={registerFormInfo}/>)}></Route>
          <Route exact path='/' render={props => (<HomePage {...props} passRegisterInfo={this.passRegisterInfo}/>)}></Route>
        </Router>
      </div>
    );
  }
};
