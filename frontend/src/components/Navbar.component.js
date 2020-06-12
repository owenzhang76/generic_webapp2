import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        return (
           <div class="navbar-main-container">
               <div class="navbar-logo">Ipsum Corporation</div>
               <div class="navbar-options-container">
                   <div>Login</div>
                   <div>Support</div>
                   <div>About</div>
               </div>
           </div>
        );
    }
}