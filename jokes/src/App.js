import { JokeGenerator } from "./components/ChuckNorris/JokeGenerator";
import "./App.css";

function Jokes() {
  return (
    <div className="app">
      <div className="container">
        <JokeGenerator
          title="Chuck Norris"
          api="https://api.chucknorris.io/jokes/random"
        />
      </div>
    </div>
  );
}

export default Jokes;
