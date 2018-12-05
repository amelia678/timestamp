import React from 'react';

function Button(props) {
    return (
        <form onSubmit={props.onSubmit}>
        <button value={props.time} 
                onChange={props.onChange} >
        What time is it
        </button>
        </form>
    )

}

export default Button;