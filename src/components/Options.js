import React from 'react'

const Options = ({options, answer, correctOption, dispatch}) => {


  const hasAnswer = answer !== null; // true or false value
 
  console.log(hasAnswer)

  function handleAnswer(index){
    dispatch({
      type: 'newAnswer',
      payload: index
    })

  }



  return (

    <div className='options'>
      {
       options?.map((option, index) =>
          <button
          onClick={() => handleAnswer(index)}
          disabled={hasAnswer}
          key={option}
          className={
            `btn btn-option ${index === answer ? "answer" : ""} ${hasAnswer && index === correctOption ? "correct" : "wrong"}`}
          >
            {option}
          </button>)
      }
    </div>
  )
}

export default Options