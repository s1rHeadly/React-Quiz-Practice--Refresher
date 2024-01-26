import { useReducer, useEffect } from "react";
import Header from "./components/global/Header";
import Main from './components/global/Main';
import StartScreen from "./components/UI/StartScreen";
import Question from "./components/Question";



import { LOCAL_URL } from "./utils/helpers";
import Loader from "./components/UI/Loader";
import Error from "./components/global/Error";


const initialState = {
  questions: [],
  status: '',
  error: null,
  index: 0,
  answer: null,
}


function qtnsFunc(state, action){
  switch (action.type) {

    
      
    case 'loading':
      return {
        ...state,
        status: 'loading',
        error: null
      }

    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
        error: null
      }


    case 'dataFailed':
      return {
        ...state,
        status: 'error',
        error: action.payload
      }
  
    case 'start':
      return {
        ...state,
        status: 'active',
        error: null
      }
    
    case 'newAnswer':
    return {
     ...state,
     answer: action.payload,
    }

    default:
    return state;
  }

}



const App = () => {

  const [state, dispatch] = useReducer(qtnsFunc, initialState);
  // console.log(`render => `, questionsState)
  const {questions, status, index, answer} = state;
  


  useEffect(() => {
    
   const getQuestions = async(url) => {

        try {
          dispatch({
            type: 'loading',
          })

          const response = await fetch(url);
          // console.log(response)
          if(!response.ok) return;

          if(response.status === 200){
            const data = await response.json();
            dispatch({
              type: 'dataReceived',
              payload: data
            })
          }

        } catch (error) {
          dispatch({
            type: 'dataFailed',
            payload: error
          })
        }
   }

   getQuestions(LOCAL_URL);

  }, []);



  return (
    <div className="app">
     <Header />

    <Main>
      {status === 'loading' && <Loader />}
      {status ===  'error' && <Error />}
      {status === 'ready' && <StartScreen dispatch={dispatch} questions={questions}/>}
      {status === 'active' && 
      <>
      <Question question={questions[index]} answer={answer} dispatch={dispatch}/>
      </>}
    </Main>
    </div>
  );
}

export default App;
