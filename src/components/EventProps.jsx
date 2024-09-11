import "./Ev.css";
export const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hey,${user}`);
  };

  const handleHover = () => {
    alert(`Hey thanks for hovering me`);
  };
  return (
    <>
      <WelcomeUser
        onClick={() => HandleWelcomeUser("vinod")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const { onClick, onMouseEnter } = props;
  const handleGreetings = () => {
    console.log(`Hey User,Welcome`);
    onClick();
  };
  return (
    <div className="events-handling">
      <button onClick={onClick}>Click </button>
      <button onMouseEnter={onMouseEnter}>Click </button>
      <button onClick={handleGreetings}>Greeting</button>
    </div>
  );
};
