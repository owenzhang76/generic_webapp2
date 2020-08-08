import i18n from 'i18next';import k from "./../i18n/keys";import React, { useEffect } from 'react';
import PersonZero from "../stock_person_0.jpg";
import PersonOne from "../stock_person_1.jpg";
import PersonTwo from "../stock_person_2.jpg";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AppointmentCard = props => {

    const dispatch = useDispatch();
    const namesList = ['Avery Garcia', 'Jack Morton', 'Jake the Dog'];

    const showPicture = () => {
        switch (props.index) {
            case 0:
                return (
                    <img alt="person one" className="list-card-image" src={PersonZero}></img>
                )
            case 1:
                return (
                    <img alt="person one" className="list-card-image" src={PersonOne}></img>
                )
            case 2:
                return (
                    <img alt="person one" className="list-card-image" src={PersonTwo}></img>
                )
        }
    }

    const launchReview = () => {
        console.log('launchReview ran');
        
    }; 

    return (
        <div class="list-card-main" onClick={launchReview}>
            <div class="list-card-image-container">
                {showPicture()}
            </div>
            <div class="list-card-name">{namesList[props.index]}</div>
        </div>
    );
}

export default AppointmentCard;