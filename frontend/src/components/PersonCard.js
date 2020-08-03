import i18n from 'i18next';import k from "../i18n/keys";import React from 'react';
import PersonZero from "../stock_person_0.jpg";
import PersonOne from "../stock_person_1.jpg";
import PersonTwo from "../stock_person_2.jpg";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PersonCard = props => {

    const dispatch = useDispatch();

    let divId = `person-container-${props.index}`;
    let [isClicked, setIsClicked] = useState(false);
    const selectedIndexes = useSelector(state => state.selectedPersonsIndex);

    useEffect(() => {
        if(selectedIndexes.includes(props.index)) {
            document.getElementById(divId).classList.add("selected-card-outline");
            setIsClicked(true);
        } else {
            document.getElementById(divId).classList.remove("selected-card-outline");
            setIsClicked(false);
        }
    }, [props.index]);

    const handleOnClick = (e) => {
        props.nextCard();
    };

    const showPicture = () => {
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
    };

    const addToList = (e) => {
        if (!isClicked) {
            console.log("if");
            setIsClicked(true);
            document.getElementById(divId).classList.add("selected-card-outline");
            dispatch({
                type: "ADD_TO_SELECTED_INDEX",
                payload: props.index, 
            });
        } else {
            console.log("else");
            setIsClicked(false);
            let index = props.index;
            console.log(index);
            document.getElementById(divId).classList.remove("selected-card-outline");
            dispatch({
                type: "REMOVE_FROM_SELECTED_INDEX",
                payload: props.index, 
            });
        }
        props.notifyAction();
    };

    return (
        <div id={divId} className="person-container">
            <div className="image-container">
                {showPicture()}
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
                            <button class="card-button button-yellow" onClick={addToList}>Add to List</button>
                            <button class="card-button button-green">View Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default PersonCard;