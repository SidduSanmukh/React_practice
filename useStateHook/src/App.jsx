import React, { useState } from "react";

const App = () => {
  const [users, setUsers] = useState({ name: "siddarooda", age: 0 });
  const [num, setNum] = useState([4, 8, 9, 11]);

  const updateUser = () => {
    const newUser = { ...users, place: "hubballi" };

    console.log(newUser);
    setUsers(newUser);
  };

  const updateNum = () => {
    const newArr = [...num];
    newArr.push(44);
    setNum(newArr);
  };

  return (
    <div>
      <h1>
        name is {users.name} age is{users.age} address is{users.place}
      </h1>
      <h1>{num}</h1>
      <button onClick={updateUser}>update age</button>
      <button onClick={updateNum}>update num</button>
    </div>
  );
};

export default App;
