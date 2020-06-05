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
            <div>
                <h1>Welcome to the homePage of Caralyst WebApp</h1>
                <RegisterForm />
            </div>
        );
    }
}