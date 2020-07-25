import i18n from 'i18next';import k from "../i18n/keys";import React from 'react';
import PersonOne from "../stock_person_1.jpg";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PersonCard = props => {
    
    // const cardIndex = useSelector(state => state.cardIndex);

    const dispatch = useDispatch();

    let [index, setIndex] = useState();

    const handleOnClick = (e) => {
        props.nextCard();
        // if (e.target === "Next") {
        //     dispatch({type: "INCREMENT_INDEX"});
        // } else {
        //     dispatch({type: "DECREMENT_INDEX"});
        // }
    }
    

    return (
        <div className="person-container">
            <div className="image-container">
                <img alt="person one" className="profile-image" src={PersonOne}></img>
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
                    <div> 
                        <button onClick={handleOnClick}>Previous</button>
                        {}
                        <button onClick={handleOnClick}>Next</button>
                    </div>
                </div>
            </div>
        </div> 
    )

}

export default DoctorCard;