export const displayData = (joke) => {
  const container = document.querySelector(".paragraph");
  const paragraph = document.createElement("p");
  paragraph.textContent = joke;
  container.appendChild(paragraph);
};
