import React from 'react'

const StartScreen = ({dispatch}) => {

  function activeStatusHandler(){
    dispatch({
      type: 'start'
    })
  }
  return (
    <div className='start'>
    <h2>Welcome to the React Quiz</h2>
    <h3>questions to test your React Mastery</h3>
    <button className='btn btn-ui' onClick={activeStatusHandler}>Let's Start</button>
    </div>
  )
}

export default StartScreen