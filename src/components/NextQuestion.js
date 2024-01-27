import React from 'react';



const NextQuestion = ({answer, index, dispatch, numberOfQuestions}) => {


  console.log(index)
  // if no answer nothing will be returned or shown from this component
 if(answer === null) return; 


 // if index value is less than the length of the question show this part of the component
  if(index < numberOfQuestions - 1){
   return(
    <button
    className='btn btn-ui'>Next Question</button>
   )
  }
 

  // if the index value is equal to the number of question - 1 show this part of the component
  if(index === numberOfQuestions - 1){
    return (
      <button
      className='btn btn-ui'
      onClick={() => dispatch({type: 'finish'})}
      >Finish</button>
    )
  }
}

export default NextQuestion