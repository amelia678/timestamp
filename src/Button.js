import React from 'react';

function Button(props) {
    return (
        
        <button onClick={props.handleClick} >
        What time is it
        </button>
        
    )

}

export default Button;