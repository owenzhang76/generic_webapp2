import i18n from 'i18next';import k from "./../i18n/keys";
import ListCard from "./ListCard";
import { useState } from 'react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const List = props => {

    const dispatch = useDispatch();
    const selectedIndexes = useSelector(state => state.selectedPersonsIndex);
    // let numChildren = useState(selectedIndexes.length);
    // const children = [];

    // useEffect(() => {
    //     console.log("New addition/removation from list");
    //     updateChildrenList();
    // }, [selectedIndexes]);

    // const updateChildrenList = () => {
    //     console.log('updateChildren list ran');
    //     selectedIndexes.map((index) => {
    //         console.log(index);
    //         children.push(<ListCard index={index}/>);
    //         console.log(children);
    //     })
    // }
    
    return (
        <div class="list-container-main">
            <div class="list-title">Your List:</div>
            <div class="list-container-body">
                {props.children}
            </div>
        </div>
    )
}

export default List;