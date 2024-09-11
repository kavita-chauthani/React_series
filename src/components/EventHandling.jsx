import "./Ev.css";

export const EventHandling = () => {
  //function handleButtonClick(){
  //alert("hey I am onClick Event")
  //}

  const handleButtonClick = (event) => {
    console.log(event);
    //console.log(event.target);
    //console.log(event.type);
    alert("Hey I am onClick Event");
  };

  const handleWelcomeUser = (user) => {
    console.log(`Hey ${user}, Welcome`);
  };

  return (
    <div className="events-handling">
      <button onClick={handleButtonClick}>click me</button>
      <br />
      <button onClick={(event) => handleButtonClick(event)}>click me2</button>
      <br />
      {/*inline Event handling */}
      <button onClick={(event) => console.log(event)}>Inline Function</button>
      {/*Function Components with Inline Arrow Function */}
      <button onClick={() => alert("Hey I am Inline Arrow Function")}>
        Inline Arrow Function
      </button>
      {/*Passing Arguments to Event Handlers */}
      {/* button onClick={()=> handleWelcomeUser("vinod")} */}
      <button onClick={() => handleWelcomeUser("vinod")}>click me</button>
      <button onClick={() => handleWelcomeUser("Ram")}>click me</button>
    </div>
  );
};
