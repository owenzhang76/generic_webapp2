import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
// import Navbar from "./Navbar";
import { useDispatch, useSelector } from 'react-redux'

const OnboardPage = () => {
    const firstname = useSelector(state => state.firstname);

    const identityList = useSelector(state => state.identityList); // action.newList

    const dispatch = useDispatch();

    const setIdentityList = (newList) => {
        dispatch({
            type: "SET_IDENTITY_LIST",
            newList,
        })
    };

    const scenarios = [];
    const scenario1 = {
        question: "Die Washington University ist eine großartige Schule und Stanford ist scheiße. Würden Sie sich also für unser Produkt entscheiden oder nicht?",
        answers: [{ key: "A", choice: "Volswagen"}, {key: "B", choice: "Gesundheit"}, {key: "C", choice: "Praktikum"}, {key: "D", choice: "Bier"}],
    }

    const scenario2 = {
        question: "Es gibt 20.000 Satelliten am Himmel, von denen jeder hell gegen das Auge blitzt. Wird es jemals eine Chance geben, dass einer von ihnen fremd ist?",
        answers: [{ key: "A", choice: "Ya Kla"}, {key: "B", choice: "Absolut Nicht"}, {key: "C", choice: "Nach Mal"}, {key: "D", choice: "Kleine Anflieht"}],
    }


    const [answerTwo, setAnswerTwo] = useState('');
    useEffect(() => {
        document.getElementById("questions-section").style.display = "none";
        let divs = document.getElementsByClassName("scenario-choice-container");
        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener("click", () => {
                setAnswerTwo(divs[i].lastElementChild.innerHTML);
                divs[i].classList.add("animate__animated");
                divs[i].classList.add("animate__flash");
                console.log('next question')
            });
            divs[i].addEventListener("animationend", () => {
                // show the next question
                console.log('scenario 2 time')
                divs[i].classList.remove("animate__animated");
                divs[i].classList.remove("animate__flash");
            });
        };

    });
   
    const toggleHighlight = (event) => {
        if (document.getElementById("identity-submit-button") == null) {
            let submitButton = document.createElement("button");
            submitButton.id = "identity-submit-button";
            submitButton.classList.add("identity-submit-button");
            submitButton.textContent = "Next";
            submitButton.addEventListener("click", handleSubmit);
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

    const handleSubmit = () => {
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

    const identitiesSection = () => (
        <div id="identities-section" class="section">
            <div class="quiz-messages-container">
                <div class="quiz-message-big animate__animated animate__fadeInUp animate__delay-300ms">Hello there, {firstname}</div>
                <div class="quiz-message-big animate__animated animate__fadeInUp animate__delay-400ms"><small>1 →</small> Please pick any identities that resonate with you.</div>
            </div>
            <div id="identities-container" class="identities-container animate__animated animate__fadeIn animate__delay-3s">
                <div class="column animate__animated animate__fadeInUp animate__delay-600ms">
                    <button id="c1" class="identity-button" onClick={toggleHighlight}>White</button>
                    <button id="c2" class="identity-button" onClick={toggleHighlight}>Destiny 2</button>
                </div>
                <div class="column "></div>
                <div class="column animate__animated animate__fadeInUp animate__delay-4s">
                    <button id="c3" class="identity-button" onClick={toggleHighlight}>duck</button>
                </div>
                <div class="column animate__animated animate__fadeInUp animate__delay-4s">
                    <button id="c4" class="identity-button" onClick={toggleHighlight}>sleepy</button>
                    <button id="c5" class="identity-button" onClick={toggleHighlight}>terminator</button>
                </div>
                <div class="column animate__animated animate__fadeInUp animate__delay-4s">
                    <button id="c6" class="identity-button" onClick={toggleHighlight}>douche</button>
                </div>
                <div class="column"></div>
                <div class="column animate__animated animate__fadeInUp animate__delay-4s">
                    <button id="c7" class="identity-button" onClick={toggleHighlight}>cheese fondue</button>
                    <button id="c8" class="identity-button" onClick={toggleHighlight}>depressed</button>
                </div>
            </div>
            <div id="button-container" class="button-container"></div>
        </div>
    );


    return (
        <div class="onboard-main-container">
            {identitiesSection()}
            <div id="questions-section" class="animate__animated animate__fadeInUp">
                <div class="scenarios-container">
                    <div id="scenario-1" class="scenario">
                        <div class="scenario-title"><small>2 →</small> Die Washington University ist eine großartige Schule und Stanford ist scheiße. Würden Sie sich also für unser Produkt entscheiden oder nicht?</div>
                        <div class="scenario-choices">
                            <div class="scenario-row">
                                <div class="scenario-choice-container">
                                    <div class="scenario-key">A</div>
                                    <div class="scenario-choice">Volswagen</div>
                                </div>
                                <div class="scenario-choice-container">
                                    <div class="scenario-key">B</div>
                                    <div class="scenario-choice">Gesundheit</div>
                                </div>
                            </div>
                            <div class="scenario-row">
                                <div class="scenario-choice-container">
                                    <div class="scenario-key">C</div>
                                    <div class="scenario-choice">Praktikum</div>
                                </div>
                                <div class="scenario-choice-container">
                                    <div class="scenario-key">D</div>
                                    <div class="scenario-choice">Krankenhaus</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OnboardPage;