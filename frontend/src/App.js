import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/LandingPage.component";
import OnboardPage from "./components/Onboard.component";
import HomePage from './components/HomePage.component';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.passRegisterInfoToMain = this.passRegisterInfoToMain.bind(this);
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
    };
  }

  async passRegisterInfoToMain(registerInfo) {
    console.log("passRegisterInfoToMain ran");
    return new Promise((resolve) => {
      this.setState({
        username: registerInfo.username,
        firstname: registerInfo.firstname,
        lastname: registerInfo.lastname,
        email: registerInfo.email,
      }, resolve);
    })
  }

  render() {
    let registerFormInfo = {
      username: this.state.username,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
    }
    
    console.log(registerFormInfo);
    
    return (
      <div>
        <Router>
          <Route exact path='/' render={props => (<LandingPage {...props} passRegisterInfoToMain={this.passRegisterInfoToMain}/>)}></Route>
          <Route exact path='/onboard' render={props => (<OnboardPage {...props} registerFormInfo={registerFormInfo}/>)}></Route>
          <Route exact path='/home' render={props => (<HomePage {...props} registerFormInfo={registerFormInfo}/>)}></Route>
        </Router>
      </div>
    );
  }
};
