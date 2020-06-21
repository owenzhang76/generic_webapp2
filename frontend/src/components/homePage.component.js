import React, { Component } from 'react';
import Navbar from './Navbar.component';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        return (
           <div class="homepage-main-container">
               <Navbar />
               <div class="homepage-container">
                   <div class="sidebar"></div>
                   <div class="matching-main-container">
                       <div class="matching-top-bar"></div>
                       <div class="matching-container">
                           <div class="doctor-container">
                               <div class="info-slide-one">
                                   <img></img>
                                   <div class="doctor-description">
                                       <div class="text-container-main">
                                            <div class="profession-name">Avery</div>
                                            <div class="place-name">Death Star Station</div>
                                            <div class="match-reason-preview-container">
                                                <div class="match-reason-container">
                                                    <div class="match-emoji"></div>
                                                    <div class="match-reason">Avery knows how to kick a ball</div>
                                                </div>
                                                <div class="match-reason-container">
                                                    <div class="match-emoji"></div>
                                                    <div class="match-reason">You both are passionate about Star Wars</div>
                                                </div>
                                            </div>
                                       </div>
                                   </div>
                               </div>
                               
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        );
    }
}