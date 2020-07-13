import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
// import Navbar from "./Navbar";
import { useDispatch, useSelector } from 'react-redux'

const OnboardPage = () => {
    const username = useSelector(state => state.username);
    const firstname = useSelector(state => state.firstname);
    const lastname = useSelector(state => state.lastname);
    const email = useSelector(state => state.email);

    const identitiesList = useSelector(state => state.identitiesList); // action.newList

    const dispatch = useDispatch();

    const setIdentityList = (newList) => {
        dispatch({
            type: "SET_IDENTITY_LIST",
            newList,
        })
    };

    const [answerTwo, setAnswerTwo] = useState('');
    useEffect(() => {
        document.getElementById("section-2").style.display = "none";
        document.getElementById("scenario-2").style.display = "none";
        let divs = document.getElementsByClassName("scenario-choice-container");
        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener("click", () => {
                setAnswerTwo(divs[i].lastElementChild.innerHTML);
                divs[i].classList.add("animate__animated");
                divs[i].classList.add("animate__flash");
            });
            divs[i].addEventListener("animationend", () => {
                divs[i].classList.remove("animate__animated");
                divs[i].classList.remove("animate__flash");
                document.getElementById("scenario-1").style.display = "none";
                document.getElementById("scenario-2").style.display = "flex";
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
        document.getElementById("section-1").classList.add('animate__animated', 'animate__fadeOutUp');
        document.getElementById("section-1").addEventListener('animationend', () => {
            document.getElementById("section-1").style.display = "none";
            document.getElementById("section-2").style.display = "block";
        });
    };

    return (
        <div class="onboard-main-container">
            <div id="section-1" class="section">
                <div class="quiz-messages-container">
                    <div class="quiz-message-big animate__animated animate__fadeInUp animate__delay-1s">Hello there, {firstname}</div>
                    <div class="quiz-message-big animate__animated animate__fadeInUp animate__delay-2s"><small>1 →</small> Please pick any identities that resonate with you.</div>
                </div>
                <div id="identities-container" class="identities-container animate__animated animate__fadeIn animate__delay-3s">
                    <div class="column animate__animated animate__fadeInUp animate__delay-4s">
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
            <div id="section-2" class="animate__animated animate__fadeInUp">
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
                    <div id="scenario-2" class="scenario animate__animated animate__fadeInUp">
                        <div class="scenario-title"><small>3 →</small> Es gibt 20.000 Satelliten am Himmel, von denen jeder hell gegen das Auge blitzt. Wird es jemals eine Chance geben, dass einer von ihnen fremd ist?</div>
                        <div class="scenario-choices">
                            <div class="scenario-row">
                                <div class="scenario-choice-container">
                                    <div class="scenario-key">A</div>
                                    <div class="scenario-choice">Ya Kla</div>
                                </div>
                                <div class="scenario-choice-container">
                                    <div class="scenario-key">B</div>
                                    <div class="scenario-choice">Absolut Nicht</div>
                                </div>
                            </div>
                            <div class="scenario-row">
                                <div class="scenario-choice-container">
                                    <div class="scenario-key">C</div>
                                    <div class="scenario-choice">Manchmal</div>
                                </div>
                                <div class="scenario-choice-container">
                                    <div class="scenario-key">D</div>
                                    <div class="scenario-choice">Kleine Anflieht</div>
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