import React from "react";

class Counter extends React.Component {

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
    
          countTotalFeedback = () => {
        return this.state.good + this.state.bad + this.state.neutral;
    };

      countPositiveFeedbackPercentage = () => {
        return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
    };

    render() {
        // const ['good', 'neutral', 'bad'] = option;
        const { good, neutral, bad, } = this.state;
        const option = Object.keys(this.state);

        return (
            <div className="Counter">
                <h1> Please leave feedback </h1>
            
                <div className="Controls">
                    <button type='buttton' option={option} onClick={() => this.handleIncremet('good')}>good</button>
                    <button type='buttton' option={option} onClick={() => this.handleIncremet('neutral')}>neutral</button>
                    <button type='buttton' option={option} onClick={() => this.handleIncremet('bad')}>bad</button>
                </div> 
                <h1> Statistiks </h1>
                <div className="Counter__state">
                    <span>Good: {good}</span>
                    <span>Neutral: {neutral}</span>
                    <span>Bad: {bad}</span>
                    <span>Total: {() => this.countTotalFeedback}</span>
                    <span>PositiveFeedback: {() => this.countPositiveFeedbackPercentage}</span>
                </div>
            </div> 
            
        )
    };
}

export default Counter;


