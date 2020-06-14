import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Navbar from "./Navbar.component";

export default class OnboardPage extends Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        return (
            <div>
                THIS IS THE ONBOARDING QUIZ PAGE!
            </div>
        );
    }
}