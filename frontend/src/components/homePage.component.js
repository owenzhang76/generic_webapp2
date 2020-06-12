import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import RegisterForm from "./RegisterForm.component";
import Navbar from "./Navbar.component";
import graphicOne from "../graphic_1.png"
import graphicTwo from "../graphic_2.png"

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        return (
            <div class="homepage-main-container">
                <Navbar />
                <div id="lineOne" class="line animate__animated animate__fadeInLeft"></div>
                <div id="lineTwo" class="line animate__animated animate__fadeInLeft"></div>
                <div id="lineThree" class="line animate__animated animate__fadeInRight"></div>
                <div id="lineFour" class="line animate__animated animate__fadeInRight"></div>
                <div class="homepage-body-container">
                    <div class="register-main-container">
                        {/* <img id="graphicTwo" class="animate__animated animate__fadeIn animate__delay-3s" src={graphicTwo}></img> */}
                        <div class="register-form-container">
                            <div class="entice-message animate__animated animate__fadeInDown">Begin a new chapter in Lorem Ipsum.</div>
                            <RegisterForm />
                        </div>

                    </div>
                    <div class="description-main-container">
                        <img id="graphicTwo" class="animate__animated animate__fadeIn animate__delay-2s" src={graphicTwo}></img>
                        <div class="animate__animated animate__fadeInUp animate__delay-1s description-text-container ">
                            <div class="bigger-text-container">
                                <p>Hippity Hoppitus Latino Choppitus.</p>
                                <p>Wir sollten alle den dunklen Lord anbeten.</p>
                            </div>
                            <p class="smaller-paragraph">Haben Sie eine lange Tag gemacht? Diese Solution ist die perfekt fit fur Sie. Fierst, wie haben Faktorie in China, Japan, und the united Staaten vom Amerika. Danach, eine Millione Customer wollen unsere Platform.</p>
                            <p class="smaller-paragraph">Haben Sie eine lange Tag gemacht? Diese Solution ist die perfekt fit fur Sie. Fierst, wie haben Faktorie in China, Japan, und the united Staaten vom Amerika. Danach, eine Millione Customer wollen unsere Platform.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}