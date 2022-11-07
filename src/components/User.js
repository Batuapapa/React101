import React from "react";

  // function User({data:{name,age,city}}) {
  // function User (props) {
  // function User (data) {
    function User ({data, friends}) {
    console.log(friends);
    // console.log(props); 

    // const {name, age, city} =props.data;
    // const {data} = props;
    // const data = props.data;
  return (
    <div>
    Kişi
    <div>İsim : {data.name} </div>
    <div>Yaş : {data.age} </div>
    <div>Şehir :  {data.city} </div>
    <h3>Arkadaşları</h3>
    {
      friends.map((friend, i) =>
    (<div key={i}>{friend}</div>)
    
      // { return <div key={i}>{friend}</div>;}

    // (
    // <div key={i}>{friend}</div>
    // )
    )}
    <hr/>
    </div>
  );
}

export default User;