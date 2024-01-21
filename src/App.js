import Header from "./components/global/Header";
import Main from './components/global/Main'

const App = () => {
  return (
    <div className="app">
     <Header />

    <Main>
      <h3>Main items go here</h3>
    </Main>
    </div>
  );
}

export default App;
