import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import RegisterForm from "./RegisterForm.component";
import Navbar from "./Navbar.component";
import graphicOne from "../../public/graphic_1.png"

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        return (
            <div class="homepage-main-container">
                <Navbar />
                <div class="homepage-body-container">
                    <div class="register-main-container">
                        <div class="entice-message animate__animated animate__fadeInDown animate__delay-1s">Begin a new chapter in Lorem Ipsum.</div>
                        <RegisterForm />
                        <img src={graphicOne}></img>
                    </div>
                </div>
            </div>
        );
    }
}