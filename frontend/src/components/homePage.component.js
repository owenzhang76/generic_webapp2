import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import registerForm from "/registerForm.component";

export default class homePage extends Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        return (
            <div>
                <h1>Welcome to the homePage of Caralyst WebApp</h1>
                <registerForm />
            </div>
        );
    }
}