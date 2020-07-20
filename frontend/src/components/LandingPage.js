import i18n from 'i18next';
import k from "./../i18n/keys";
import React from 'react';
import RegisterForm from "./RegisterForm.component";
import Navbar from "./Navbar";
import graphicTwo from "../graphic_2.png";

const LandingPage = ({ history, passRegisterInfoToMain }) => {

  const submitRegistration = async registerInfo => {
    // axios promise blah
    console.log('submitting data to axios');
    console.log(registerInfo);
  };

  const registerUser = async registerInfo => {
    await submitRegistration(registerInfo);
    history.push('/onboard');
  };


  // sequence: Submit registration info. Await confirmation. Push to next page.

  return (
    <div className="homepage-main-container">
      <Navbar />
      <div className="homepage-body-container">
        <div className="register-main-container">
          <div className="upper-lines-container animate__animated animate__fadeInLeft animate__delay-3s">
            <div id="lineOne" className="line"></div>
            <div id="lineTwo" className="line"></div>
          </div>
          <div className="register-form-container">
            <div className="entice-message animate__animated animate__fadeInDown">{i18n.t(k.BEGIN_A_NEW_CHAPTER_IN_LOREM_I)}</div>
            <RegisterForm registerUser={registerUser} />
          </div>
          <div className="lower-lines-container animate__animated animate__fadeInRight animate__delay-3s">
            <div id="lineThree" className="line"></div>
            <div id="lineFour" className="line"></div>
          </div>
        </div>
        <div className="description-main-container">
          <div className="image-container">
            <img alt="macy the builder" id="graphicTwo" className="animate__animated animate__fadeIn animate__delay-2s" src={graphicTwo}></img>
          </div>
          <div className="description-text">
            <div className="animate__animated animate__fadeInUp animate__delay-1s description-text-container ">
              <div className="bigger-text-container">
                <p>{i18n.t(k.HIPPITY_HOPPITUS_LATINO_CHOPPI)}</p>
                <p>{i18n.t(k.WIR_SOLLTEN_ALLE_DEN_DUNKLEN_L)}</p>
              </div>
              <p className="smaller-paragraph">{i18n.t(k.HABEN_SIE_EINE_LANGE_TAG_GEMAC)}</p>
              <p className="smaller-paragraph">{i18n.t(k.HABEN_SIE_EINE_LANGE_TAG_GEMAC)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>);
};

export default LandingPage;