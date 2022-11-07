import User from "./components/User";

function App() {
  return (
    <div>
      <User 
      // name= "Baturalp Alper HEPER"
      // city= "Bursa"
      // age=  {24}
      title ="Kişi"
      data={{
        name: "Baturalp Alper HEPER",
        city: "Bursa",
        age: 24,
      }}
        friends={["Ahmet", "Murat", "Ayşe", "Fatma"]} 
      />
    </div>
  );
}
export default App;
