// import Header from './components/Header';
import React from 'react';
import Login from './components/Login';

const isLoggedIn = false;
// const isLoggedIn = false;
const fullname = "Baturalp Alper HEPER";
function App() {
  return (
  <div className='test'>{
     /* <div className="test">{isLoggedIn && <div>Hoşgeldin {fullname}</div>} 
                        {!isLoggedIn && <a href='#'>Giriş yapın</a>}
      </div> */}  
    {
      // isLoggedIn ? "Hoşgeldin " + fullname : "Giriş yapın"
      // isLoggedIn ? "Hoşgeldin " + fullname : <a href="#">Giriş Yapın</a>
      // isLoggedIn ? <div>Hoşgeldin {fullname}</div> : <a href="#">Giriş Yapın</a>
      //  isLoggedIn ? <div>Hoşgeldin {fullname}</div> : null }
      //  isLoggedIn ? <div>Hoşgeldin {fullname}</div> : <Header/>}
       isLoggedIn ? <div>Hoşgeldin {fullname}</div> : <Login/>}
  </div>
  );
}  
export default App;
