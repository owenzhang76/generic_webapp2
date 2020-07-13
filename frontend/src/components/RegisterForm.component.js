import i18n from 'i18next';import k from "./../i18n/keys";import React, { Component } from 'react';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: i18n.t(k._3),
      password: i18n.t(k._3),
      email: i18n.t(k._3),
      firstname: i18n.t(k._3),
      lastname: i18n.t(k._3) };

  }

  componentDidMount() {
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value });

  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value });

  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value });

  }

  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value });

  }

  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value });

  }

  onSubmit(e) {
    e.preventDefault();
    const registerInfo = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      firstname: this.state.firstname,
      lastname: this.state.lastname };

    console.log(registerInfo);
    this.props.passRegisterInfo(registerInfo);
  }

  render() {
    return (
      <form class="register-form animate__animated animate__fadeInUp animate__delay-3s" onSubmit={this.onSubmit}> 
                <div class="form-names-container">
                    <div class="form-div long-input">
                        <label>{i18n.t(k.FIRST)}</label>
                        <input id="firstname-submit" type="text" value={this.state.firstname} onChange={this.onChangeFirstname} />
                    </div>
                    <div class="form-div long-input">
                        <label>{i18n.t(k.LAST)}</label>
                        <input id="lastname-submit" type="text" value={this.state.lastname} onChange={this.onChangeLastname} />
                    </div>
                </div>
                <div class="form-div">
                        <label>{i18n.t(k.USERNAME)}</label>
                        <input id="username-submit" type="text" value={this.state.username} onChange={this.onChangeUsername} />
                </div>
                <div class="form-div">
                        <label>{i18n.t(k.EMAIL)}</label>
                        <input id="email-submit" type="text" value={this.state.email} onChange={this.onChangeEmail} />
                </div>
                <div class="form-div">
                    <label>{i18n.t(k.PASSWORD)}</label>
                    <input id="password-submit" type="text" value={this.state.password} onChange={this.onChangePassword} />
                </div>
                <div class="form-div-button">
                    <button class="register-button" href="#">{i18n.t(k.REGISTER)}</button>
                </div>
            </form>);

  }}