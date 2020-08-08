import i18n from 'i18next';import k from "./../i18n/keys";import React from 'react';
import PersonCard from "./PersonCard";
import List from "./List";
import ListCard from "./ListCard";
import Appointments from "./Appointments";
import AppointmentCard from "./AppointmentCard";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = props => {

    const [cardIndex, setCardIndex] = useState(0);
    const selectedIndexes = useSelector(state => state.selectedPersonsIndex);
    let [children, updateChildrenList] = useState([]);
    let [appointments, updateAppointmentsList] = useState([]);
    const [test, setTest] = useState(0);

    useEffect(() => {
        console.log("New addition/removation from list");
        updateChildrenList();
        updateAppointmentsList();
    }, [selectedIndexes]);

    updateChildrenList = () => {
        children.length = 0;
        console.log('updateChildren list ran');
        selectedIndexes.map((index) => {
            console.log(index);
            children.push(<ListCard index={index}/>);
            console.log(children);
        });
        // I learned something here!
        setTest(test+1);
    };

    updateAppointmentsList = () => {
        appointments.length = 0;
        console.log('updateAppoitments list ran');
        selectedIndexes.map((index) => {
            console.log(index);
            appointments.push(<AppointmentCard index={index}/>);
            console.log(appointments);
        });
        // I learned something here!
        setTest(test+1);
    };

    const notifyAction = () => {
        console.log("yeet");
    };

    const personCardOne = {
        // index: 0,
        name: i18n.t(k.PERSON_ONE_NAME),
        location:  i18n.t(k.PERSON_ONE_LOCATION),
        similarities: [
            i18n.t(k.PERSON_ONE_SIM_ONE),
            i18n.t(k.PERSON_ONE_SIM_TWO),
            i18n.t(k.PERSON_ONE_SIM_THREE),
            i18n.t(k.PERSON_ONE_SIM_FOUR),
        ]
    };

    const personCardTwo = {
        // index: 1,
        name: i18n.t(k.PERSON_TWO_NAME),
        location:  i18n.t(k.PERSON_TWO_LOCATION),
        similarities: [
            i18n.t(k.PERSON_TWO_SIM_ONE),
            i18n.t(k.PERSON_TWO_SIM_TWO),
            i18n.t(k.PERSON_TWO_SIM_THREE),
            i18n.t(k.PERSON_TWO_SIM_FOUR),
        ]
    };

    const personCardThree = {
        // index: 2,
        name: i18n.t(k.PERSON_THREE_NAME),
        location:  i18n.t(k.PERSON_THREE_LOCATION),
        similarities: [
            i18n.t(k.PERSON_THREE_SIM_ONE),
            i18n.t(k.PERSON_THREE_SIM_TWO),
            i18n.t(k.PERSON_THREE_SIM_THREE),
            i18n.t(k.PERSON_THREE_SIM_FOUR),
        ]
    };

    const personCardsList = [personCardOne, personCardTwo, personCardThree];

    const nextCard = () => {
        if ((cardIndex+1) >= 3) {
            setCardIndex(0);
        } else {
            setCardIndex(cardIndex+1);
        }
    }

    const prevCard = () => {
        if ((cardIndex-1) <= -1) {
            setCardIndex(2);
        } else {
            setCardIndex(cardIndex-1);
        }
    }

    return (
        <div className="home-main-container">
            <div className="homepage-container">
                <div className="sidebar">
                    <List children={children}/>
                    <Appointments children={appointments}/>
                </div>
                <div className="matching-main-container">
                    <i class="fas fa-2x fa-arrow-left" onClick={prevCard}></i>
                    <div className="matching-container">
                        <PersonCard index={cardIndex} personInfo={personCardsList[cardIndex]} nextCard={nextCard} notifyAction={notifyAction}/>
                    </div>
                    <i class="fas fa-2x fa-arrow-right" onClick={nextCard}></i>
                </div>
            </div>
        </div>
    );
}

export default HomePage;