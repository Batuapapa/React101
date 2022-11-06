import logo from './logo.svg';
import './App.css';
import {Title} from "./components/Title";
function App() {
  return (
    <div className="App">
     <Title propsTitle='hello js'></Title>
     <Title propsTitle='hello react'></Title>
    </div>
  );
}

export default App;
