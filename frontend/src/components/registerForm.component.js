import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class registerForm extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            email: '',
            firstname: '',
            lastname: '',
        }
    };

    componentDidMount() {
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
        const user = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname
        }
        console.log(user);
        this.props.history.push('/login');
        this.setState({
            username: "",
            password: "",
            email: "",
            firstname: "",
            lastname: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}> 
                <h1>Please Register</h1>
                <label>Username:</label>
                <input id="username-submit" type="text" value={this.state.username} onChange={this.onChangeUsername} />
                <br />
                <label>Password:</label>
                <input id="password-submit" type="text" value={this.state.password} onChange={this.onChangePassword} />
                <br />
                <label>Email:</label>
                <input id="email-submit" type="text" value={this.state.email} onChange={this.onChangeEmail} />
                <br />
                <label>Firstname:</label>
                <input id="firstname-submit" type="text" value={this.state.firstname} onChange={this.onChangeFirstname} />
                <br />
                <label>Lastname:</label>
                <input id="lastname-submit" type="text" value={this.state.lastname} onChange={this.onChangeLastname} />
                <br />
                <input id="login-submit" type="submit" />
            </form>
        );
    }
}