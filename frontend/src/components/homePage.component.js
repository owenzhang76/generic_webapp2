import React, { Component } from 'react';
import Navbar from './Navbar.component';
import PersonOne from "../stock_person_1.jpg";
import PersonTwo from "../stock_person_2.jpg";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        return (
           <div class="home-main-container">
               {/* <Navbar /> */}
               <div class="homepage-container">
                   <div class="sidebar"></div>
                   <div class="matching-main-container">
                       <div class="matching-top-bar"></div>
                       <div class="matching-container">
                           <div class="person-container">
                               {/* <div id="info-slide-one"> */}
                                   <div class="image-container">
                                       <img class="profile-image" src={PersonOne}></img>
                                   </div>
                                   <div class="person-description">
                                       <div class="text-container-main">
                                            <div class="center-header">Avery García</div>
                                            <div class="text-big">2 Hacker Way Center, Menhigh Park</div>
                                            <div class="match-reason-preview-container">
                                                <div class="match-reason-container">
                                                    <i class="far fa-check-circle"></i>
                                                    <div class="match-reason">&nbsp; Avery knows how to play the piano</div>
                                                </div>
                                                <div class="match-reason-container">
                                                    <i class="far fa-check-circle"></i>
                                                    <div class="match-reason">&nbsp; You both are passionate about poverty</div>
                                                </div>
                                            </div>
                                       </div>
                                   </div>
                               {/* </div> */}
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        );
    }
}