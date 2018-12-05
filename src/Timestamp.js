import React, {Component} from 'react';
import Button from './Button';


class Timestamp extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }


    render(){
        return(
            <div>
                <h1>Timestamp</h1>
            <Button />
        
            </div>
        )
    }
}

export default Timestamp;