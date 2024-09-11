//import NetflixSeries from "./components/NetflixSeries";
//import "./components/Netflix.css";
import "./components/Netflix.module.css";
import { EventProps } from "./components/EventProps";

function App() {
  return (
    <section className="container">
      {/*<h1 className="card-heading">List of Best Netflix Series</h1>
      <NetflixSeries /> 
      <EventHandling />*/}
      <EventProps />
    </section>
  );
}

export default App;
