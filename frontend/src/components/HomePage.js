import i18n from 'i18next';import k from "./../i18n/keys";import React from 'react';
import PersonOne from "../stock_person_1.jpg";

const HomePage = () =>
<div className="home-main-container">
               {/* <Navbar /> */}
               <div className="homepage-container">
                   <div className="sidebar"></div>
                   <div className="matching-main-container">
                       <div className="matching-top-bar"></div>
                       <div className="matching-container">
                           <div className="person-container">
                               {/* <div id="info-slide-one"> */}
                                   <div className="image-container">
                                       <img alt="person one" className="profile-image" src={PersonOne}></img>
                                   </div>
                                   <div id="description-one" className="person-description">
                                       {/* <div id="page-one" className="text-container-main">
                                            <div className="center-header">Avery García</div>
                                            <div className="text-big">2 Hacker Way Center, Menhigh Park</div>
                                            <div className="match-reason-preview-container">
                                                <div className="match-reason-container">
                                                    <i className="far fa-check-circle fa-lg"></i>
                                                    <div className="match-reason">&nbsp; Avery knows how to play the piano</div>
                                                </div>
                                                <div className="match-reason-container">
                                                    <i className="far fa-check-circle fa-lg"></i>
                                                    <div className="match-reason">&nbsp; You both are passionate about poverty</div>
                                                </div>
                                            </div>
                                        </div> */}
                                       <div id="page-two" className="text-container-main">
                                            <div className="center-header">{i18n.t(k.AVERY_GARC_A)}</div>
                                            <div className="text-big">{i18n.t(k.HACKER_WAY_CENTER_MENHIGH_P)}</div>
                                            <div className="match-reason-preview-container">
                                                <div className="match-reason-container">
                                                    <i className="far fa-check-circle fa-lg"></i>
                                                    <div className="match-reason">{i18n.t(k.YOU_BOTH_AVERY_KNOWS_HOW_TO_PL)}</div>
                                                </div>
                                                <div className="match-reason-container">
                                                    <i className="far fa-check-circle fa-lg"></i>
                                                    <div className="match-reason">{i18n.t(k.YOU_BOTH_ARE_PASSIONATE_ABOUT)}</div>
                                                </div>
                                                <div className="match-reason-container">
                                                    <i className="fas fa-fan"></i>
                                                    <div className="match-reason">{i18n.t(k.YOU_BOTH_AVERY_SUPPORTS_THE_BL)}</div>
                                                </div>
                                                <div className="match-reason-container">
                                                    <i className="far fa-check-circle fa-lg"></i>
                                                    <div className="match-reason">{i18n.t(k.YOU_BOTH_GRADUATED_FROM_THE_UN)}</div>
                                                </div>
                                            </div>
                                       </div>
                                   </div>
                                   
                               {/* </div> */}
                           </div>
                       </div>
                   </div>
               </div>
           </div>;

export default HomePage;