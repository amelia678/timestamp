import React, {Component} from 'react';
import Button from './Button';
import List from './List';


const date = new Date();
let timestamp = date.toISOString();

// const someDates = ['2018-12-06',
//                 '2018-12-10',
//                 '2018-12-11'


// ]



class Timestamp extends Component {
    constructor(props){
        super(props);
        this.state = {
            dates: [
                
            ]
    }
}


    render(){
        return(
            <div>
                <h1>Timestamp</h1>
            <Button
            
            handleClick={this._addDate}
            
            // onSubmit={this._onSubmit} 
            // value={this.state.value}
            // onChange= {(event) => this._onChange(event.target.value)}
            />
            <div>
                <List 
                someDates = {this.state.dates}
                />

            </div>
        
            </div>
        )
    }

    // _onChange = timeInput => {
    //     this.setState({
    //         value: timeInput
    //     })
    // }

    _addDate = () => {
        const aNewDate = new Date ();
        
        console.log('submitted')
        
        this.setState({
            dates: [...this.state.dates, 
                aNewDate.toLocaleString()
            ]
        });
        
    }
}

export default Timestamp;