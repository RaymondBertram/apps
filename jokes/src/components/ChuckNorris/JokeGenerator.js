import { displayData } from "../../service/displayData";

import "./JokeGenerator.css";

export function JokeGenerator(props) {
  const { title, api } = props;

  const getJokes = () => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => displayData(data.value));
  };

  return (
    <div>
      <div className="header">
        <h1>{title} Jokes Generator</h1>
      </div>
      <button onClick={getJokes}>Get Jokes</button>
      <div className="paragraph"></div>
    </div>
  );
}
