import React, {Component} from "react";

class Counter extends Component{

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };


    handleIncrement = option => {
        this.setState(prevState => {
         return { [option]: prevState[option] + 1 };
        });
    };
    
    render() {
        return (
            <div className="Counter">
                <span className="Counter__state"></span>
                {/* Controls onIncrement={this.hendleIncrement}  */}
           </div> 
        )
    };
}

export default Counter;



