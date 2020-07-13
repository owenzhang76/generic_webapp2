import React from 'react';
import RegisterForm from "./RegisterForm.component";
import Navbar from "./Navbar";
import graphicTwo from "../graphic_2.png";

const LandingPage = ({ history, passRegisterInfoToMain }) => {

  const submitRegistration = async (registerInfo) => {
    // axios promise blah
    console.log('submitting data to axios')
    console.log(registerInfo);
  }

  const registerUser = async (registerInfo) => {
    await submitRegistration(registerInfo);
    history.push('/onboard');
  }


  // sequence: Submit registration info. Await confirmation. Push to next page.
  
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
            <RegisterForm registerUser={registerUser} />
          </div>
          <div class="lower-lines-container animate__animated animate__fadeInRight animate__delay-3s">
            <div id="lineThree" class="line"></div>
            <div id="lineFour" class="line"></div>
          </div>
        </div>
        <div class="description-main-container">
          <div class="image-container">
            <img alt="macy the builder" id="graphicTwo" class="animate__animated animate__fadeIn animate__delay-2s" src={graphicTwo}></img>
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