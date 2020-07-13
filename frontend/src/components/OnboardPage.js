import React, { useState, useEffect } from 'react';
// import Navbar from "./Navbar";
import { useDispatch, useSelector } from 'react-redux'

const OnboardPage = () => {
    const firstname = useSelector(state => state.firstname);

    const identityList = useSelector(state => state.identityList); // action.newList

    const [count, setCount] = useState(0);

    const dispatch = useDispatch();

    const setIdentityList = (newList) => {
        dispatch({
            type: "SET_IDENTITY_LIST",
            newList,
        })
    };

    const [questionIndex, setQuestionIndex] = useState(0);


    const scenario1 = {
        question: "Die Washington University ist eine großartige Schule und Stanford ist scheiße. Würden Sie sich also für unser Produkt entscheiden oder nicht?",
        answers: [{ key: "A", choice: "Volswagen" }, { key: "B", choice: "Gesundheit" }, { key: "C", choice: "Praktikum" }, { key: "D", choice: "Bier" }],
    }

    const scenario2 = {
        question: "Es gibt 20.000 Satelliten am Himmel, von denen jeder hell gegen das Auge blitzt. Wird es jemals eine Chance geben, dass einer von ihnen fremd ist?",
        answers: [{ key: "A", choice: "Ya Kla" }, { key: "B", choice: "Absolut Nicht" }, { key: "C", choice: "Nach Mal" }, { key: "D", choice: "Kleine Anflieht" }],
    }

    const scenarios = [scenario1, scenario2];


    const moveToNextQuestion = () => {
        setQuestionIndex(questionIndex + 1)
    };

    useEffect(() => {
        document.getElementById("questions-section").style.display = "none";
    });

    const toggleIdentity = (chosenIdentity) => {
        if (identityList && identityList.includes(chosenIdentity))  {// remove existing identity from list
            setIdentityList(
                identityList.filter(identity => identity !== chosenIdentity)
            )
        } else {
            setIdentityList(
                [...identityList, chosenIdentity]
            )
        }
    }

    const moveToQuestions = () => {
        let chosenIdentities = document.getElementsByClassName("identity-button-focus");
        let testList = [];
        for (let i = 0; i < chosenIdentities.length; i++) {
            testList.push(chosenIdentities[i].textContent);
        };
        setIdentityList(testList);
        document.getElementById("identities-section").classList.add('animate__animated', 'animate__fadeOutUp');
        document.getElementById("identities-section").addEventListener('animationend', () => {
            document.getElementById("identities-section").style.display = "none";
            document.getElementById("questions-section").style.display = "block";
        });
    };


    const identitiesSection = () => {
        const identityButton = (text, index) => (
            <button 
            id={`c${index}`} 
            className={identityList && identityList.includes(text) ? "identity-button-focus" : "identity-button"}
            onClick={() => toggleIdentity(text)}>
                {text}
            </button>
        );
        return (
            <div id="identities-section" className="section">
                <div className="quiz-messages-container">
                    <div className="quiz-message-big animate__animated animate__fadeInUp animate__delay-300ms">Hello there, {firstname}</div>
                    <div className="quiz-message-big animate__animated animate__fadeInUp animate__delay-400ms"><small>1 →</small> Please pick any identities that resonate with you.</div>
                </div>
                <div id="identities-container" className="identities-container animate__animated animate__fadeIn animate__delay-100ms">
                    <div className="column animate__animated animate__fadeInUp animate__delay-500ms">
                        {identityButton("White",0)}
                        {identityButton("Destiny 2",1)}
                    </div>
                    <div className="column "></div>
                    <div className="column animate__animated animate__fadeInUp animate__delay-500ms">
                        {identityButton("duck",2)}
                    </div>
                    <div className="column animate__animated animate__fadeInUp animate__delay-500ms">
                        {identityButton("sleepy",3)}
                        {identityButton("terminator",4)}
                    </div>
                    <div className="column animate__animated animate__fadeInUp animate__delay-500ms">
                        {identityButton("douche",5)}
                    </div>
                    <div className="column"></div>
                    <div className="column animate__animated animate__fadeInUp animate__delay-500ms">
                        {identityButton("cheese fondue",6)}
                        {identityButton("depressed",7)}
                    </div>
                </div>
                <div id="button-container" className="button-container">
                    <button
                        id="identity-submit-button"
                        className="identity-submit-button"
                        onClick={moveToQuestions}
                        disabled={identityList.length < 1}>
                        Next
                </button>
                </div>
            </div>
        );
    }

    const makeQuestion = (scenario, questionNumber) => {
        return (
            <div className="scenario">
                <div className="scenario-title">
                    Question Index!{questionIndex}
                    <small>2 →</small>
                    {scenario.question}
                </div>
                <div className="scenario-choices">
                    {scenario.answers.map((answer, index) => (
                        <div className="scenario-row" key={index}>
                            <div className="scenario-choice-container" onClick={moveToNextQuestion}>
                                <div className="scenario-key">{answer.key}</div>
                                <div className="scenario-choice">{answer.choice}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }


    return (
        <div className="onboard-main-container">
            {identitiesSection()}
            <div id="questions-section" className="animate__animated animate__fadeInUp">
                Question Index!{questionIndex}
                <div>WHAT IS HAPPNIENG
                <p>You clicked {count} times</p>
                    <button onClick={() => setCount(count + 1)}>
                        Click me
      </button>
                </div>
                <div className="scenarios-container">
                    {makeQuestion(scenarios[questionIndex])}
                </div>
            </div>
        </div>
    );
}

export default OnboardPage;