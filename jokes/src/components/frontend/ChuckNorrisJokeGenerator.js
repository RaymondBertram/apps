import "./ChuckNorrisJokeGenerator.css";

export function ChuckNorrisJokeGenerator() {
  //rename

  const apiUrl = "https://api.chucknorris.io/jokes/random";

  const getJokes = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => displayData(data.value));
  };

  // getJokes();

  const displayData = (j) => {
    const container = document.querySelector(".paragraph");
    const paragraph = document.createElement("p");
    paragraph.textContent = j;
    container.appendChild(paragraph);
  };

  return (
    <div>
      <div className="header">
        <h1>Chuck Norris Jokes Generator</h1>
      </div>
      <button onClick={getJokes}>Get Jokes</button>
      <div className="paragraph"></div>
    </div>
  );
}
