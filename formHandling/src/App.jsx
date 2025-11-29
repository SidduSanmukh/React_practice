import React from "react";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState("");

  const subm = () => {
    console.log("form submitted by ", user);
    setUser("");
  };

  return (
    <div>
      <form
        onSubmit={eee => {
          subm(eee.preventDefault());
        }}
      >
        <input
          type="text"
          name="name"
          id="name"
          value={user}
          onChange={e => {
            setUser(e.target.value);
            console.log(user);
          }}
        />
        <button>submit</button>
        <h1>{user}</h1>
      </form>
    </div>
  );
};

export default App;
