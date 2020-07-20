import i18n from 'i18next';import k from "./../i18n/keys";import React from 'react';
import DoctorCard from "./DoctorCard";

const HomePage = () => {

    const doctorCardOne = {
        name: i18n.t(k.DOCTOR_ONE_NAME),
        location:  i18n.t(k.DOCTOR_ONE_LOCATION),
        similarities: [
            i18n.t(k.DOCTOR_ONE_SIM_ONE),
            i18n.t(k.DOCTOR_ONE_SIM_TWO),
            i18n.t(k.DOCTOR_ONE_SIM_THREE),
            i18n.t(k.DOCTOR_ONE_SIM_FOUR),
        ]
    };

    const doctorCardTwo= {
        name: i18n.t(k.DOCTOR_TWO_NAME),
        location:  i18n.t(k.DOCTOR_TWO_LOCATION),
        similarities: [
            i18n.t(k.DOCTOR_TWO_SIM_ONE),
            i18n.t(k.DOCTOR_TWO_SIM_TWO),
            i18n.t(k.DOCTOR_TWO_SIM_THREE),
            i18n.t(k.DOCTOR_TWO_SIM_FOUR),
        ]
    };

    const doctorCardThree= {
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

    return (
        <div className="home-main-container">
            <div className="homepage-container">
                <div className="sidebar"></div>
                <div className="matching-main-container">
                    <div className="matching-container">
                        {showCard(doctorCardsList)}
                        {/* {doctorCardsList.map((doctor) => 
                            <DoctorCard doctorInfo={doctor}/>
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;