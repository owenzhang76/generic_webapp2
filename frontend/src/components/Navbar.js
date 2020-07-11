import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Navbar = () => {
        return (
           <div class="navbar-main-container">
               <div class="navbar-logo-container">
                    <div class="navbar-logo">Ipsum Corporation</div>
               </div>
               <div class="navbar-options-container">
                   <div>Login</div>
                   <div>Support</div>
                   <div>About</div>
               </div>
           </div>
        );
}
export default Navbar;