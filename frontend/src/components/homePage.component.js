import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import RegisterForm from "./RegisterForm.component";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        return (
            <div class="homepage-main-container">
                <div class="entice-message">Begin a new chapter in Healthcare.</div>
                <RegisterForm />
            </div>
        );
    }
}