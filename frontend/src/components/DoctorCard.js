import i18n from 'i18next';import k from "./../i18n/keys";import React from 'react';
import PersonOne from "../stock_person_1.jpg";

const DoctorCard = props => {
    return (
        <div className="person-container">
            <div className="image-container">
                <img alt="person one" className="profile-image" src={PersonOne}></img>
            </div>
            <div id="description-one" className="person-description">
                <div id="page-two" className="text-container-main">
                    <div className="center-header">{props.doctorInfo.name}</div>
                    <div className="text-big">{props.doctorInfo.location}</div>
                    <div className="match-reason-preview-container">
                        <div className="match-reason-container">
                            <i className="far fa-check-circle fa-lg"></i>
                            <div className="match-reason">{props.doctorInfo.similarities[0]}</div>
                        </div>
                        <div className="match-reason-container">
                            <i className="far fa-check-circle fa-lg"></i>
                            <div className="match-reason">{props.doctorInfo.similarities[1]}</div>
                        </div>
                        <div className="match-reason-container">
                            <i className="fas fa-fan"></i>
                            <div className="match-reason">{props.doctorInfo.similarities[2]}</div>
                        </div>
                        <div className="match-reason-container">
                            <i className="far fa-check-circle fa-lg"></i>
                            <div className="match-reason">{props.doctorInfo.similarities[3]}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )

}

export default DoctorCard;