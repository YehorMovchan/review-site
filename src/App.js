import './Styles/App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header status={false}></Header>
      <Main></Main>
    </div>
  );
}

export default App;
