import React, {Component} from 'react';
import Button from './Button';
import List from './List';

// const date = new Date();
// let timestamp = date.toISOString();

class Timestamp extends Component {
    constructor(props){
        super(props);
        this.state = {
            // time = '',
            items: []
        };
    }


    render(){
        return(
            <div>
                <h1>Timestamp</h1>
            <Button
            onSubmit={this._onSubmit} 
            time={this.state.time}
            onChange= {(event) => this._onChange(event.taget.value)}
            />
            <div>
                <List 
                items = {this.state.items}
                />

            </div>
        
            </div>
        )
    }

    // _onChange = () => {
    //     this.setState({
    //         time: timestamp
    //     })
    // }

    _onSubmit = (time) => {
        time.preventDefault();
        console.log('submitted')
        // console.log(timestamp)
        this.setState({
            items: [...this.state.items, time]
        })
        
    }
}

export default Timestamp;