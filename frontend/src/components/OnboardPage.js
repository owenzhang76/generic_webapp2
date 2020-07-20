import i18n from 'i18next';import k from "./../i18n/keys";import React, { useState } from 'react';
// import Navbar from "./Navbar";
import { useDispatch, useSelector } from 'react-redux';

const OnboardPage = ({ history }) => {
  const firstname = useSelector(state => state.firstname);

  const identityList = useSelector(state => state.identityList); // action.newList

  const [onQuestionsYet, setOnQuestionsYet] = useState(false);

  const dispatch = useDispatch();

  const setIdentityList = newList => {
    dispatch({
      type: "SET_IDENTITY_LIST",
      newList 
    });
  };

  const [questionIndex, setQuestionIndex] = useState(0);


  const question1 = {
    question: i18n.t(k.DIE_STANFORD_UNIVERSITY_IST_E),
    answers: [{ key: i18n.t(k.A), choice: i18n.t(k.VOLSWAGEN) }, { key: i18n.t(k.B), choice: i18n.t(k.GESUNDHEIT) }, { key: i18n.t(k.C1), choice: i18n.t(k.PRAKTIKUM) }, { key: i18n.t(k.D), choice: i18n.t(k.BIER) }] 
  };


  const question2 = {
    question: i18n.t(k.ES_GIBT_SATELLITEN_AM),
    answers: [{ key: i18n.t(k.A), choice: i18n.t(k.YA_KLA) }, { key: i18n.t(k.B), choice: i18n.t(k.ABSOLUT_NICHT) }, { key: i18n.t(k.C1), choice: i18n.t(k.NACH_MAL) }, { key: i18n.t(k.D), choice: i18n.t(k.KLEINE_ANFLIEHT) }] 
  };


  const questions = [question1, question2];


  const moveToNextQuestion = () => {
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      history.push('/home');
    }
  };

  const toggleIdentity = chosenIdentity => {
    let newList;
    if (identityList && identityList.includes(chosenIdentity)) {// remove existing identity from list
      newList = identityList.filter(identity => identity !== chosenIdentity);
    } else {
      newList = [...identityList, chosenIdentity];
    }
    setIdentityList(newList);
    console.log(newList);
  };

  const moveToQuestions = () => {
    document.getElementById("identities-section").classList.add('animate__animated', 'animate__fadeOutUp');
    document.getElementById("identities-section").addEventListener('animationend', () => {
      document.getElementById("identities-section").style.display = i18n.t(k.NONE);
    });
    setOnQuestionsYet(true);
  };


  const identitiesSection = () => {
    const identityButton = (text, index) =>
    <button id={`${i18n.t(k.C)}${index}`} className={identityList && identityList.includes(text) ? "identity-button-focus" : "identity-button"} onClick={() => toggleIdentity(text)}>
      {text}
    </button>;

    return (
      <div id="identities-section" className="section">
                <div className="quiz-messages-container">
                    <div className="quiz-message-big animate__animated animate__fadeInUp animate__delay-300ms">{i18n.t(k.HELLO_THERE)} {firstname}</div>
                    <div className="quiz-message-big animate__animated animate__fadeInUp animate__delay-400ms"><small>{i18n.t(k._)}</small> {i18n.t(k.PLEASE_PICK_ANY_IDENTITIES_THA)}</div>
                </div>
                <div id="identities-container" className="identities-container animate__animated animate__fadeIn animate__delay-100ms">
                    <div className="column animate__animated animate__fadeInUp animate__delay-500ms">
                        {identityButton("Identity: White", 0)}
                        {identityButton("Identity: Destiny 2", 1)}
                    </div>
                    <div className="column "></div>
                    <div className="column animate__animated animate__fadeInUp animate__delay-500ms">
                        {identityButton("Identity: duck", 2)}
                    </div>
                    <div className="column animate__animated animate__fadeInUp animate__delay-500ms">
                        {identityButton("Identity: sleepy", 3)}
                        {identityButton("Identity: terminator", 4)}
                    </div>
                    <div className="column animate__animated animate__fadeInUp animate__delay-500ms">
                        {identityButton("Identity: douche", 5)}
                    </div>
                    <div className="column"></div>
                    <div className="column animate__animated animate__fadeInUp animate__delay-500ms">
                        {identityButton("Identity: cheese fondue", 6)}
                        {identityButton("Identity: depressed", 7)}
                    </div>
                </div>
                <div id="button-container" className="button-container">
                    <button
                      id="identity-submit-button"
                      className="identity-submit-button"
                      onClick={moveToQuestions}
                      disabled={identityList.length < 1}>
                        {i18n.t(k.NEXT)}
                    </button>
                </div>
        </div>);

  };




  const makeQuestion = question => {
    return (
      <div className="question">
        <div className="question-title">
            <small>{questionIndex + 2} {i18n.t(k._1)}</small>
            {question.question}
        </div>
        <div className="question-choices">
            {question.answers.map((answer, index) =>
              <div className="question-row" key={index}>
                  <div className="question-choice-container" onClick={moveToNextQuestion}>
                      <div className="question-key">{answer.key}</div>
                      <div className="question-choice">{answer.choice}</div>
                  </div>
              </div>)
            }
        </div>
      </div>);
  };



  return (
    <div className="onboard-main-container">
      {identitiesSection()}
      <div id="questions-section" style={{ display: onQuestionsYet ? "block" : "none" }}>
          <div className="questions-container">
              {makeQuestion(questions[questionIndex])}
          </div>
      </div>
    </div>);

};

export default OnboardPage;