import i18n from 'i18next';import k from "./../i18n/keys";import React, { Component } from 'react';
import Navbar from './Navbar.component';
import PersonOne from "../stock_person_1.jpg";
import PersonTwo from "../stock_person_2.jpg";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

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
                                   <div id="description-one" class="person-description">
                                       {/* <div id="page-one" class="text-container-main">
                                            <div class="center-header">Avery García</div>
                                            <div class="text-big">2 Hacker Way Center, Menhigh Park</div>
                                            <div class="match-reason-preview-container">
                                                <div class="match-reason-container">
                                                    <i class="far fa-check-circle fa-lg"></i>
                                                    <div class="match-reason">&nbsp; Avery knows how to play the piano</div>
                                                </div>
                                                <div class="match-reason-container">
                                                    <i class="far fa-check-circle fa-lg"></i>
                                                    <div class="match-reason">&nbsp; You both are passionate about poverty</div>
                                                </div>
                                            </div>
                                        </div> */}
                                       <div id="page-two" class="text-container-main">
                                            <div class="center-header">{i18n.t(k.AVERY_GARC_A)}</div>
                                            <div class="text-big">{i18n.t(k.HACKER_WAY_CENTER_MENHIGH_P)}</div>
                                            <div class="match-reason-preview-container">
                                                <div class="match-reason-container">
                                                    <i class="far fa-check-circle fa-lg"></i>
                                                    <div class="match-reason">{i18n.t(k.AVERY_KNOWS_HOW_TO_PLAY_THE_PI)}</div>
                                                </div>
                                                <div class="match-reason-container">
                                                    <i class="far fa-check-circle fa-lg"></i>
                                                    <div class="match-reason">{i18n.t(k.YOU_BOTH_ARE_PASSIONATE_ABOUT)}</div>
                                                </div>
                                                <div class="match-reason-container">
                                                    <i class="fas fa-fan"></i>
                                                    <div class="match-reason">{i18n.t(k.AVERY_SUPPORTS_THE_BLM_MOVEMEN)}</div>
                                                </div>
                                                <div class="match-reason-container">
                                                    <i class="far fa-check-circle fa-lg"></i>
                                                    <div class="match-reason">{i18n.t(k.YOU_BOTH_GRADUATED_FROM_THE_UN)}</div>
                                                </div>
                                            </div>
                                       </div>
                                   </div>
                                   
                               {/* </div> */}
                           </div>
                       </div>
                   </div>
               </div>
           </div>);

  }}