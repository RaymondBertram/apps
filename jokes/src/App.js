import { JokeGenerator } from "./components/ChuckNorris/JokeGenerator";
import "./App.css";

function Jokes() {
  return (
    <div className="app">
      <div className="container">
        <JokeGenerator
          title="Own Backend"
          api="http://localhost:3000/api/getJoke"
        />
      </div>
    </div>
  );
}

export default Jokes;
