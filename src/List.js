import React from 'react';


// const date = new Date();
// let timestamp = date.toISOString();

function convertDatesToItems(someDates) {
    const datesAsListItems = someDates.map((dateString) => {

    
    return (<li>{dateString}</li>)
    });
    return datesAsListItems
}

const List = (props) => {
    return (
        <ul>
        {convertDatesToItems(props.someDates)}
        
        
        </ul>
    )
}

// alternate:
// function List(props) {
    // return ();
    
// }
export default List;