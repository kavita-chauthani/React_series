import { useState } from "react";
export const State = () => {
  // let value = 0;
  //const handleButtonClick = () => {
  //value++;
  //console.log(value);
  //};
  const [count, setCount] = useState(0);
  console.log("Parent component rendered");
  const handleButtonClick = () => {
    setCount(() => count + 1);
  };

  return (
    <>
      <div className="main-div">
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
      </div>
      <div>
        <ChildComponent count={count} />
      </div>
    </>
  );
};
function ChildComponent(props) {
  console.log("Child Component rendered");
  return (
    <div className="main-div">
      <h2>ChildComponent-{props.count}</h2>
    </div>
  );
}

function SiblingComponent() {
  console.log("Sibling Component rendered");
  return (
    <div className="main-div">
      <h2>SiblingComponent</h2>
    </div>
  );
}
