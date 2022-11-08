
import React, { useState } from 'react'

function User() {
  const [user, setUser] = useState({ name: "Baturalp Alper", surname: "HEPER" });

  return (
    <div>
      <h2>User</h2>

      {user.name} {user.surname}
      <br /><br />
      <button onClick={() => setUser({ ...user, name: "Kadir  " })}>İsmi Değiştir </button>
      <button onClick={() => setUser({ ...user, surname: "YİĞİT  " })}>Soyismi Değiştir</button>

    </div>
  )
}

export default User