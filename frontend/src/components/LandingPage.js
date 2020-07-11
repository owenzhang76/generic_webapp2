import React, { Component, useState } from 'react';
import RegisterForm from "./RegisterForm.component";
import Navbar from "./Navbar";
import graphicTwo from "../graphic_2.png";

const LandingPage = ({ history }, passRegisterInfoToMain) => {
  const [state, setState] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: ""
  });

  const passRegisterInfo = (registerInfo) => {
    console.log("passData ran");
    setState({
      username: registerInfo.username,
      firstname: registerInfo.firstname,
      lastname: registerInfo.lastname,
      email: registerInfo.email
    },
      () => {
        console.log(this);
        doSomething(registerInfo);
      });
  }

  const doSomething = async (registerInfo) => {
    await passRegisterInfoToMain(registerInfo);
    history.push('/onboard');
  }

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
            <div class="entice-message animate__animated animate__fadeInDown">Begin a new chapter in Lorem Ipsum.</div>
            <RegisterForm passRegisterInfo={passRegisterInfo} />
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
                <p>HIPPITY_HOPPITUS_LATINO_CHOPPI</p>
                <p>WIR_SOLLTEN_ALLE_DEN_DUNKLEN_L</p>
              </div>
              <p class="smaller-paragraph">HABEN_SIE_EINE_LANGE_TAG_GEMAC</p>
              <p class="smaller-paragraph">HABEN_SIE_EINE_LANGE_TAG_GEMAC</p>
            </div>
          </div>
        </div>
      </div>
    </div>);
}

export default LandingPage;