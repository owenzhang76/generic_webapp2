import i18n from 'i18next';import k from "../i18n/keys";
import ListCard from "./ListCard";
import { useState } from 'react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Appointments = props => {

    const dispatch = useDispatch();
    const selectedIndexes = useSelector(state => state.selectedPersonsIndex);
   
    
    return (
        <div class="list-container-main">
            <div class="list-title">Your Appointments:</div>
            <div class="list-container-body">
                {props.children}
            </div>
        </div>
    )
}

export default Appointments;