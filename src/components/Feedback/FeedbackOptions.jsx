import React from "react";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, index) => (
          
          <button
            type="button"
            key={index}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
            </button>
      ))}
    </>
  );
};




// 
 
//     const FeedbackOptions = ({ options, onLeaveFeedback  }) => (
            
//         <div className="Controls">
//             {options.map(({ option, }) => (
//                 <button
//                     type='buttton'
//                     onClick={onLeaveFeedback}
//                 >{option}</button>
//             ))};
//         </div>
//     );

//     
     

                
               
       

