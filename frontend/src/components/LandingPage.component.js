import i18n from 'i18next';import k from "./../i18n/keys";import React, { Component } from 'react';
import RegisterForm from "./RegisterForm.component";
import Navbar from "./Navbar.component";
import graphicTwo from "../graphic_2.png";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.passRegisterInfo = this.passRegisterInfo.bind(this);
    this.doSomething = this.doSomething.bind(this);
    this.setState({
      username: "",
      firstname: "",
      lastname: "",
      email: "" });

  }

  passRegisterInfo(registerInfo) {
    console.log("passData ran");
    this.setState({
      username: registerInfo.username,
      firstname: registerInfo.firstname,
      lastname: registerInfo.lastname,
      email: registerInfo.email },
    () => {
      console.log(this);
      this.doSomething(registerInfo);
    });
  }

  async doSomething(registerInfo) {
    await this.props.passRegisterInfoToMain(registerInfo);
    this.props.history.push('/onboard');
  }

  render() {
    return (
      <div class="homepage-main-container">
                <Navbar />
                <div class="homepage-body-container">
                    <div class="register-main-container">
                        <div class="upper-lines-container animate__animated animate__fadeInLeft animate__delay-3s">
                            <div id="lineOne" class="line"></div>
                            <div id="lineTwo" class="line"></div>
                        </div>
                        <div class="register-form-container">
                            <div class="entice-message animate__animated animate__fadeInDown">{i18n.t(k.BEGIN_A_NEW_CHAPTER_IN_LOREM_I)}</div>
                            <RegisterForm passRegisterInfo={this.passRegisterInfo} />
                        </div>
                        <div class="lower-lines-container animate__animated animate__fadeInRight animate__delay-3s">
                            <div id="lineThree" class="line"></div>
                            <div id="lineFour" class="line"></div>
                        </div>
                    </div>
                    <div class="description-main-container">
                        <div class="image-container">
                            <img id="graphicTwo" class="animate__animated animate__fadeIn animate__delay-2s" src={graphicTwo}></img>
                        </div>
                        <div class="description-text">
                            <div class="animate__animated animate__fadeInUp animate__delay-1s description-text-container ">
                                <div class="bigger-text-container">
                                    <p>{i18n.t(k.HIPPITY_HOPPITUS_LATINO_CHOPPI)}</p>
                                    <p>{i18n.t(k.WIR_SOLLTEN_ALLE_DEN_DUNKLEN_L)}</p>
                                </div>
                                <p class="smaller-paragraph">{i18n.t(k.HABEN_SIE_EINE_LANGE_TAG_GEMAC)}</p>
                                <p class="smaller-paragraph">{i18n.t(k.HABEN_SIE_EINE_LANGE_TAG_GEMAC)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);

  }}