import { useState } from "react";

export const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Angel", age: 35 },
    { name: "Bob", age: 21 },
    { name: "Charlie", age: 40 },
  ]);
  console.log(users);
  {
    /*Derived state*/
  }
  const userCount = users.length;
  const averageAge =
    users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount;

  return (
    <div className="main-div">
      <h1>User List</h1>
      <ul>
        {users.map((currElem, index) => {
          return (
            <li key={index}>
              {currElem.name}-{currElem.age}yearold
            </li>
          );
        })}
      </ul>
      <p>Total Users:{userCount}</p>
      <p>Average Age:{averageAge}</p>
    </div>
  );
};
