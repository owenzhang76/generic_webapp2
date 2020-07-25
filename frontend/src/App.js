import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/LandingPage";
import OnboardPage from "./components/OnboardPage";
import HomePage from './components/HomePage';

const App = () => {

  const defaultState = {
    cardIndex: "",
    username: "",
    password: "",
    email: "",
    firstname: "", 
    lastname: "",
    identityList: [] 
  };

  const userInfoReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "SET_USERNAME":
        return {
          ...state,
          username: action.text 
        };

      case "SET_FIRSTNAME":
        return {
          ...state,
          firstname: action.text 
        };

      case "SET_LASTNAME":
        return {
          ...state,
          lastname: action.text 
        };

      case "SET_EMAIL":
        return {
          ...state,
          email: action.text 
        };

      case "SET_IDENTITY_LIST":
        return {
          ...state,
          identityList: action.newList 
        };

      default:
        return state;
    }
  };


  // const cardIndexReducer = (state = defaultState, action) => {
  //   switch (action.type) {
  //     case "INCREMEMENT_INDEX": 
  //       return {
  //           ...state,
  //           cardIndex: state.cardIndex + 1
  //       };

  //     case "DECREMENT_INDEX": 
  //     return {
  //         ...state,
  //         cardIndex: state.cardIndex - 1
  //     };

  //     default:
  //       return state;
  //   }
  // }

  let store = createStore(userInfoReducer);

  return (
    <Provider store={store}>
      <div>
        <Router>
          <Route exact path='/' render={props => <LandingPage {...props} />}></Route>
          <Route exact path='/onboard' render={props => <OnboardPage {...props} />}></Route>
          <Route exact path='/home' render={props => <HomePage {...props} />}></Route>
        </Router>
      </div>
    </Provider>
  );
};

export default App;