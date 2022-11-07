import React from "react";
import PropTypes from "prop-types";

function User({data, friends}) {
  return (
    <div>
      Kişi
      <div>İsim : {data.name} </div>
      <div>Yaş : {data.age} </div>
      <div>Şehir :  {data.city} </div>   
      <h3>Arkadaşları</h3>
      {friends.map((friend, i) =>(
      <div key={i}>{friend}</div>
    ))} 
      <hr />
    </div>
  );
}

User.propTypes = {
  data: PropTypes.exact({
    name: PropTypes.string,
    age: PropTypes.number,
    city: PropTypes.string,
}),
  friends: PropTypes.array,
};
export default User;