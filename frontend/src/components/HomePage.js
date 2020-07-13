import React from 'react';
import PersonOne from "../stock_person_1.jpg";

const HomePage  = () => (
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
                                            <div className="center-header">Avery García</div>
                                            <div className="text-big">2 Hacker Way Center, Menhigh Park</div>
                                            <div className="match-reason-preview-container">
                                                <div className="match-reason-container">
                                                    <i className="far fa-check-circle fa-lg"></i>
                                                    <div className="match-reason">You both Avery knows how to play the piano</div>
                                                </div>
                                                <div className="match-reason-container">
                                                    <i className="far fa-check-circle fa-lg"></i>
                                                    <div className="match-reason">You both are passionate about poverty</div>
                                                </div>
                                                <div className="match-reason-container">
                                                    <i className="fas fa-fan"></i>
                                                    <div className="match-reason">You both Avery supports the BLM Movement</div>
                                                </div>
                                                <div className="match-reason-container">
                                                    <i className="far fa-check-circle fa-lg"></i>
                                                    <div className="match-reason">You both graduated from the University of Phoenix</div>
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
export default HomePage;