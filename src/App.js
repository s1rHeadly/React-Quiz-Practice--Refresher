import { useReducer, useEffect } from "react";
import Header from "./components/global/Header";
import Main from './components/global/Main';
import StartScreen from "./components/UI/StartScreen";



import { LOCAL_URL } from "./utils/helpers";


const initialState = {
  questions: [],
  status: '',
}


function qtnsFunc(state, action){
  switch (action.type) {

    
      
    case 'loading':
      return {
        ...state, status: true,
      }

    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready'
      }


    case 'error':
      return {
        ...state, status: action.payload
      }
  
    default:
    return state;
  }

}



const App = () => {

  const [state, dispatch] = useReducer(qtnsFunc, initialState);
  // console.log(`render => `, questionsState)
  const {questions, status} = state;
  




  useEffect(() => {

   const getQuestions = async(url) => {

        try {
          
          dispatch({
            type: 'loading',
          })

          const response = await fetch(url);
          console.log(response)
          if(!response.ok) return;

          if(response.status === 200){
            const data = await response.json();
            // console.log('response => ', data)
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
      {status === 'ready' && console.log('ready')}
    </Main>
    </div>
  );
}

export default App;
