import { ChuckNorrisJokeGenerator } from "./components/frontend/ChuckNorrisJokeGenerator";
import "./App.css";

function Jokes() {
  return (
    <div className="app">
      <div className="container">
        <ChuckNorrisJokeGenerator />
      </div>
    </div>
  );
}

export default Jokes;
