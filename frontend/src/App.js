import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage.component";
import OnboardPage from "./components/Onboard.component";

export default class App extends React.Component{
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

  passRegisterInfoToMain(registerInfo) {
    console.log("passRegisterInfoToMain ran");
    this.setState({
      username: registerInfo.username,
      firstname: registerInfo.firstname,
      lastname: registerInfo.lastname,
      email: registerInfo.email,
    }, () => {
      console.log(this.state);
    });
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
          <Route exact path='/' render={props => (<HomePage {...props} passRegisterInfoToMain={this.passRegisterInfoToMain}/>)}></Route>
          <Route exact path='/onboard' render={props => (<OnboardPage {...props} registerFormInfo={registerFormInfo}/>)}></Route>
        </Router>
      </div>
    );
  }
};
