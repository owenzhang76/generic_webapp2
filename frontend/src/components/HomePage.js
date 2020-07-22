import i18n from 'i18next';import k from "./../i18n/keys";import React from 'react';
import DoctorCard from "./DoctorCard";
import { useState } from 'react';import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {

    // const cardIndex = useSelector(state => state.cardIndex);

    const [cardIndex, setCardIndex] = useState(0);

    const doctorCardOne = {
        // index: 0,
        name: i18n.t(k.DOCTOR_ONE_NAME),
        location:  i18n.t(k.DOCTOR_ONE_LOCATION),
        similarities: [
            i18n.t(k.DOCTOR_ONE_SIM_ONE),
            i18n.t(k.DOCTOR_ONE_SIM_TWO),
            i18n.t(k.DOCTOR_ONE_SIM_THREE),
            i18n.t(k.DOCTOR_ONE_SIM_FOUR),
        ]
    };

    const doctorCardTwo = {
        // index: 1,
        name: i18n.t(k.DOCTOR_TWO_NAME),
        location:  i18n.t(k.DOCTOR_TWO_LOCATION),
        similarities: [
            i18n.t(k.DOCTOR_TWO_SIM_ONE),
            i18n.t(k.DOCTOR_TWO_SIM_TWO),
            i18n.t(k.DOCTOR_TWO_SIM_THREE),
            i18n.t(k.DOCTOR_TWO_SIM_FOUR),
        ]
    };

    const doctorCardThree = {
        // index: 2,
        name: i18n.t(k.DOCTOR_THREE_NAME),
        location:  i18n.t(k.DOCTOR_THREE_LOCATION),
        similarities: [
            i18n.t(k.DOCTOR_THREE_SIM_ONE),
            i18n.t(k.DOCTOR_THREE_SIM_TWO),
            i18n.t(k.DOCTOR_THREE_SIM_THREE),
            i18n.t(k.DOCTOR_THREE_SIM_FOUR),
        ]
    };

    const doctorCardsList = [doctorCardOne, doctorCardTwo, doctorCardThree];

    const nextCard = () => {
        setCardIndex(cardIndex+1);
       
    }

    const prevCard = () => {
        setCardIndex(cardIndex-1);
       
    }

    return (
        <div className="home-main-container">
            <div className="homepage-container">
                <div className="sidebar"></div>
                <div className="matching-main-container">
                    <div className="matching-container">
                        <DoctorCard doctorInfo={doctorCardsList[cardIndex]} nextCard={nextCard}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;