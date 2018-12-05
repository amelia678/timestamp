import React from 'react';

const date = new Date();
let timestamp = date.toISOString();

const List = (props) => {
    return (
        <ul>
        {props.items.map( item => {
            return (
                <li key={item.id}>
                    {timestamp}
                </li>
            )
        })}
        
        </ul>
    )
}

export default List;