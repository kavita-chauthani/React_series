//import NetflixSeries from "./components/NetflixSeries";
//import "./components/Netflix.css";
//import "./components/Netflix.module.css";
import "./components/Ev.css";
import { DerivedState } from "./components/DerivedState";

function App() {
  return (
    <section className="container">
      {/*<h1 className="card-heading">List of Best Netflix Series</h1>
      <NetflixSeries /> 
      <EventHandling />
      <EventProps />
      <State />
      <SiblingComponent />*/}
      <DerivedState />
    </section>
  );
}

export default App;
