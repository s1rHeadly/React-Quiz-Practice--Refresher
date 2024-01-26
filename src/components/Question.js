import React from 'react'
import Options from './Options'

const Question = ({question, answer, dispatch}) => {
 
  const {title, options, correctOption} = question;
 
  return (
    <div className='options'>
      <h4>{title}</h4>
      <Options options={options} correctOption={correctOption} answer={answer} dispatch={dispatch}/>
    </div>
  )
}

export default Question