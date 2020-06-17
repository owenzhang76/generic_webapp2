import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Navbar from "./Navbar.component";

export default class OnboardPage extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        console.log(this.props);

        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            password: '',
        }
    };
    componentDidMount() {
        this.setState({
            username: this.props.registerFormInfo.username,
            password: this.props.registerFormInfo.password,
            email: this.props.registerFormInfo.email,
            firstname: this.props.registerFormInfo.firstname,
            lastname: this.props.registerFormInfo.lastname,
        }, () => {
            console.log(this.state);
        })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    };

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    };
    
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    };

    onChangeFirstname(e) {
        this.setState({
            firstname: e.target.value
        })
    };

    onChangeLastname(e) {
        this.setState({
            lastname: e.target.value
        })
    };

    onSubmit(e) {
        e.preventDefault();
        const registerInfo = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname
        }
        console.log(registerInfo);
        this.props.passRegisterInfo(registerInfo);
    }

    render() {
        console.log(this.state);
        return (
            <div class="onboard-main-container"> 
                <div class="quiz-message-big">Hello there, {this.state.firstname}</div>
                <form class="quiz-container animate__animated animate__fadeInUp" onSubmit={this.onSubmit}> 
                    <div class="form-names-container">
                        <div class="form-div long-input">
                            <label>First:</label>
                            <input id="firstname-submit" type="text" value={this.state.firstname} onChange={this.onChangeFirstname} />
                        </div>
                        <div class="form-div long-input">
                            <label>Last:</label>
                            <input id="lastname-submit" type="text" value={this.state.lastname} onChange={this.onChangeLastname} />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}