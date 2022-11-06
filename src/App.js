import logo from './logo.svg';
import './App.css';
import {Title} from "./components/Title";
import Header from "./components/Header";
import React from 'react';
const name = "Baturalp Alper";
let surname = "HEPER";
function App() {
  // return React.createElement("div",null,React.createElement("p",null));   --jsx olmasaydı kullanılacak yapı bu şekilde olacaktı
  return (
    <React.Fragment>
    {/* <div className="App">
     <Title propsTitle='hello js'></Title>
     <Title propsTitle='hello react'></Title> 
     <Header/>
    </div> */}
    <div className='test'>
      {name} {surname}
 
      <div>
        <p>Test</p>
      </div>

        <label htmlFor='test'>Test</label>

        <div>hello</div>
     </div>
    </React.Fragment> //kapsayıcı eleman gereklidir
  );
}  

export default App;
