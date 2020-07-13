import i18n from 'i18next';import k from "./../i18n/keys";import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="navbar-main-container">
               <div class="navbar-logo-container">
                    <div class="navbar-logo">{i18n.t(k.IPSUM_CORPORATION)}</div>
               </div>
               <div class="navbar-options-container">
                   <div>{i18n.t(k.LOGIN)}</div>
                   <div>{i18n.t(k.SUPPORT)}</div>
                   <div>{i18n.t(k.ABOUT)}</div>
               </div>
           </div>);

  }}