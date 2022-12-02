import React from "react"

const Controls = ({ onIncrement }) => (
    <div className="Counter__controls">
       <button type='buttton' onClick={onIncrement}>good</button>
       <button type='buttton' onClick={onIncrement}>neutral</button>
       <button type='buttton' onClick={onIncrement}>bad</button>
    </div>
)
export default Controls;