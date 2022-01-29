// Initial state
const canvas = document.querySelector("#canvas");

const pixels = 550;
const canvasSize = `${pixels}px`;
canvas.style.minHeight = canvasSize;
canvas.style.maxHeight = canvasSize;
canvas.style.minWidth = canvasSize;
canvas.style.maxWidth = canvasSize;

const canvasElementCreator = (n) => {
  const numberOfElements = n ** 2;
  for (let i = 0, len = numberOfElements; i < len; i++) {
    eval(`canvasElement${i} = document.createElement("div")`);
    eval(`canvasElement${i}.classList.add("canvas-element", "element-${i}")`);
    eval(`canvas.appendChild(canvasElement${i})`);
  }
};

// DOM manupulation
numberOfSquaresPerSide = 16;
canvasElementCreator(numberOfSquaresPerSide);

const hoverRandomColors = (e) => {
  const randomColor = Math.floor(16 ** 6 * Math.random()).toString(16);
  e.target.style.backgroundColor = `#${randomColor}`;
};

const canvasElements = document.querySelectorAll("div.canvas-element");

canvasElements.forEach((element) => {
  element.style.minHeight = `${pixels / numberOfSquaresPerSide}px`;
  element.style.maxHeight = `${pixels / numberOfSquaresPerSide}px`;
  element.style.minWidth = `${pixels / numberOfSquaresPerSide}px`;
  element.style.maxWidth = `${pixels / numberOfSquaresPerSide}px`;
  element.addEventListener("mouseover", hoverRandomColors);
});

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
  canvasElements.forEach((element) => {
    element.style.backgroundColor = "white";
  });
});
