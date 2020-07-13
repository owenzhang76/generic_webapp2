import i18n from 'i18next';import k from "./../i18n/keys";import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Navbar from "./Navbar.component";

export default class OnboardPage extends Component {
  constructor(props) {
    super(props);

    this.toggleHighlight = this.toggleHighlight.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: '',
      firstname: i18n.t(k._3),
      lastname: '',
      email: '',
      identitiesList: [],
      answerTwo: '' };

  }

  componentDidMount() {
    this.setState({
      username: this.props.registerFormInfo.username,
      password: this.props.registerFormInfo.password,
      email: this.props.registerFormInfo.email,
      firstname: this.props.registerFormInfo.firstname,
      lastname: this.props.registerFormInfo.lastname },
    () => {
      document.getElementById("section-2").style.display = "none";
      document.getElementById("scenario-2").style.display = "none";
      let divs = document.getElementsByClassName("scenario-choice-container");
      for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", () => {
          this.setState({
            answerTwo: divs[i].lastElementChild.innerHTML },
          () => {
            divs[i].classList.add("animate__animated");
            divs[i].classList.add("animate__flash");
          });
        });
        divs[i].addEventListener("animationend", () => {
          divs[i].classList.remove("animate__animated");
          divs[i].classList.remove("animate__flash");
          document.getElementById("scenario-1").style.display = "none";
          document.getElementById("scenario-2").style.display = "flex";
        });
      };
    });
  }

  toggleHighlight(event) {
    if (document.getElementById("identity-submit-button") == null) {
      let submitButton = document.createElement("button");
      submitButton.id = "identity-submit-button";
      submitButton.classList.add("identity-submit-button");
      submitButton.textContent = "Next";
      submitButton.addEventListener("click", this.handleSubmit);
      document.getElementById("button-container").appendChild(submitButton);
    }
    if (event.target.classList.contains("identity-button")) {
      event.target.classList.remove("identity-button");
      event.target.classList.add('identity-button-focus');
    } else {
      event.target.classList.remove("identity-button-focus");
      event.target.classList.add('identity-button');
    }
  }

  handleSubmit() {
    let chosenIdentities = document.getElementsByClassName("identity-button-focus");
    let testList = [];
    for (let i = 0; i < chosenIdentities.length; i++) {
      testList.push(chosenIdentities[i].textContent);
    };
    this.setState({
      identitiesList: testList },
    () => {
      console.log(this.state);
      document.getElementById("section-1").classList.add('animate__animated', 'animate__fadeOutUp');
      document.getElementById("section-1").addEventListener('animationend', () => {
        document.getElementById("section-1").style.display = "none";
        document.getElementById("section-2").style.display = "block";
      });
    });
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

  render() {
    return (
      <div class="onboard-main-container"> 
                <div id="section-1" class="section">
                    <div class="quiz-messages-container">
                        <div class="quiz-message-big animate__animated animate__fadeInUp animate__delay-1s">{i18n.t(k.HELLO_THERE)} {this.state.firstname}</div>
                        <div class="quiz-message-big animate__animated animate__fadeInUp animate__delay-2s"><small>{i18n.t(k._)}</small> {i18n.t(k.PLEASE_PICK_ANY_IDENTITIES_THA)}</div>
                    </div>
                    <div id="identities-container" class="identities-container animate__animated animate__fadeIn animate__delay-3s">
                        <div class="column animate__animated animate__fadeInUp animate__delay-4s">
                            <button id="c1" class="identity-button" onClick={this.toggleHighlight}>{i18n.t(k.WHITE)}</button>
                            <button id="c2" class="identity-button" onClick={this.toggleHighlight}>{i18n.t(k.DESTINY)}</button>
                        </div>
                        <div class="column "></div>
                        <div class="column animate__animated animate__fadeInUp animate__delay-4s">
                            <button id="c3" class="identity-button" onClick={this.toggleHighlight}>{i18n.t(k.DUCK)}</button>
                        </div>
                        <div class="column animate__animated animate__fadeInUp animate__delay-4s">
                            <button id="c4" class="identity-button" onClick={this.toggleHighlight}>{i18n.t(k.SLEEPY)}</button>
                            <button id="c5" class="identity-button" onClick={this.toggleHighlight}>{i18n.t(k.TERMINATOR)}</button>
                        </div>
                        <div class="column animate__animated animate__fadeInUp animate__delay-4s">
                            <button id="c6" class="identity-button" onClick={this.toggleHighlight}>{i18n.t(k.DOUCHE)}</button>
                        </div>
                        <div class="column"></div>
                        <div class="column animate__animated animate__fadeInUp animate__delay-4s">
                            <button id="c7" class="identity-button" onClick={this.toggleHighlight}>{i18n.t(k.CHEESE_FONDUE)}</button>
                            <button id="c8" class="identity-button" onClick={this.toggleHighlight}>{i18n.t(k.DEPRESSED)}</button>
                        </div>
                    </div>
                    <div id="button-container" class="button-container"></div>      
                </div>
                <div id="section-2" class="animate__animated animate__fadeInUp">
                    <div class="scenarios-container">
                        <div id="scenario-1" class="scenario">
                            <div class="scenario-title"><small>{i18n.t(k._1)}</small> {i18n.t(k.DIE_WASHINGTON_UNIVERSITY_IST)}</div>
                            <div class="scenario-choices">
                                <div class="scenario-row">
                                    <div class="scenario-choice-container">
                                        <div class="scenario-key">{i18n.t(k.A)}</div>
                                        <div class="scenario-choice">{i18n.t(k.VOLSWAGEN)}</div>
                                    </div>
                                    <div class="scenario-choice-container">
                                        <div class="scenario-key">{i18n.t(k.B)}</div>
                                        <div class="scenario-choice">{i18n.t(k.GESUNDHEIT)}</div>
                                    </div>
                                </div>
                                <div class="scenario-row">
                                    <div class="scenario-choice-container">
                                        <div class="scenario-key">{i18n.t(k.C)}</div>
                                        <div class="scenario-choice">{i18n.t(k.PRAKTIKUM)}</div>
                                    </div>
                                    <div class="scenario-choice-container">
                                        <div class="scenario-key">{i18n.t(k.D)}</div>
                                        <div class="scenario-choice">{i18n.t(k.KRANKENHAUS)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="scenario-2" class="scenario animate__animated animate__fadeInUp">
                            <div class="scenario-title"><small>{i18n.t(k._2)}</small> {i18n.t(k.ES_GIBT_SATELLITEN_AM_H)}</div>
                            <div class="scenario-choices">
                                <div class="scenario-row">
                                    <div class="scenario-choice-container">
                                        <div class="scenario-key">{i18n.t(k.A)}</div>
                                        <div class="scenario-choice">{i18n.t(k.YA_KLA)}</div>
                                    </div>
                                    <div class="scenario-choice-container">
                                        <div class="scenario-key">{i18n.t(k.B)}</div>
                                        <div class="scenario-choice">{i18n.t(k.ABSOLUT_NICHT)}</div>
                                    </div>
                                </div>
                                <div class="scenario-row">
                                    <div class="scenario-choice-container">
                                        <div class="scenario-key">{i18n.t(k.C)}</div>
                                        <div class="scenario-choice">{i18n.t(k.MANCHMAL)}</div>
                                    </div>
                                    <div class="scenario-choice-container">
                                        <div class="scenario-key">{i18n.t(k.D)}</div>
                                        <div class="scenario-choice">{i18n.t(k.KLEINE_ANFLIEHT)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);

  }}