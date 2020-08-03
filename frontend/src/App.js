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
    identityList: [] ,
    selectedPersonsIndex: [],
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

      case "ADD_TO_SELECTED_INDEX":
        return {
          ...state,
          selectedPersonsIndex: [...state.selectedPersonsIndex, action.payload]
        };

      case "REMOVE_FROM_SELECTED_INDEX":
        let indexInList = state.selectedPersonsIndex.indexOf(action.payload);
        return {
          ...state,
          selectedPersonsIndex: [
            ...state.selectedPersonsIndex.slice(0, indexInList),
            ...state.selectedPersonsIndex.slice(indexInList + 1),
          ],
        };

      default:
        return state;
    }
  };

  let store = createStore(userInfoReducer);

  store.subscribe(() => {
    console.log('Store updated! ', store.getState());
  });

  // const showState = () => {
  //   console.log("Inside App.js");
  //   console.log(store.getState());
  // }

  console.log(defaultState);
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Route exact path='/' render={props => <LandingPage {...props} />}></Route>
          <Route exact path='/onboard' render={props => <OnboardPage {...props} />}></Route>
          <Route exact path='/home' render={props => <HomePage {...props}/>}></Route>
        </Router>
      </div>
    </Provider>
  );
};

export default App;