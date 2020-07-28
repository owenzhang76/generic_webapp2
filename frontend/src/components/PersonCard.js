import i18n from 'i18next';import k from "../i18n/keys";import React from 'react';
import PersonZero from "../stock_person_0.jpg";
import PersonOne from "../stock_person_1.jpg";
import PersonTwo from "../stock_person_2.jpg";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PersonCard = props => {
    
    // const cardIndex = useSelector(state => state.cardIndex);

    const dispatch = useDispatch();

    let [index, setIndex] = useState();


    const handleOnClick = (e) => {
        props.nextCard();
    }
    console.log(props);
    console.log(props.personInfo);

    const showPicture = () => {
        console.log(props.index);
        switch (props.index) {
            case 0:
                return (
                    <img alt="person one" className="profile-image" src={PersonZero}></img>
                )
            case 1:
                return (
                    <img alt="person one" className="profile-image" src={PersonOne}></img>
                )
            case 2:
                return (
                    <img alt="person one" className="profile-image" src={PersonTwo}></img>
                )
        }
    }


    return (
        <div className="person-container">
            <div className="image-container">
                {showPicture()}
                {/* <img alt="person one" className="profile-image" src={PersonZero}></img> */}
            </div>
            <div id="description-one" className="person-description">
                <div id="page-two" className="text-container-main">
                    <div className="center-header">{props.personInfo.name}</div>
                    <div className="text-big">{props.personInfo.location}</div>
                    <div className="match-reason-preview-container">
                        <div className="match-reason-container">
                            <i className="far fa-check-circle fa-lg"></i>
                            <div className="match-reason">{props.personInfo.similarities[0]}</div>
                        </div>
                        <div className="match-reason-container">
                            <i className="far fa-check-circle fa-lg"></i>
                            <div className="match-reason">{props.personInfo.similarities[1]}</div>
                        </div>
                        <div className="match-reason-container">
                            <i className="fas fa-fan"></i>
                            <div className="match-reason">{props.personInfo.similarities[2]}</div>
                        </div>
                        <div className="match-reason-container">
                            <i className="far fa-check-circle fa-lg"></i>
                            <div className="match-reason">{props.personInfo.similarities[3]}</div>
                        </div>
                    </div>
                    <div class="card-button-container"> 
                        <div class="card-button-twin">
                            <button class="card-button button-yellow">Add to List</button>
                            <button class="card-button button-green">View Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )

}

export default PersonCard;