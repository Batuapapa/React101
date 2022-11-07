import User from "./components/User";

const user = {
  name : "Baturalp Alper HEPER",
  city : "Bursa",
  age : 24,
};

function App() {
  return (
  <div> 
    <User data = {user} friends ={["Ahmet","Murat","Ayşe","Fatma"]}/>
   </div> 
  );
}  
export default App;
