import React from "react";
// import css from './Statistics.module.css';

export const Statistiks = ({ good, neutral, bad, total, positivFeedback, }) => {
    return (
        <>
            <div className="Counter__state" >
                <span>Good: {good}</span>
                <span>Neutral: {neutral}</span>
                <span>Bad: {bad}</span>
                <span>Total: {total}</span>
                <span>PositiveFeedback: {positivFeedback}%</span>
            </div >
        </>
    );
};