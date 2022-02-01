// Initial state
const canvas = document.querySelector("#canvas");

const pixels = 550;
const canvasSize = `${pixels}px`;
canvas.style.minHeight = canvasSize;
canvas.style.maxHeight = canvasSize;
canvas.style.minWidth = canvasSize;
canvas.style.maxWidth = canvasSize;

const hoverRandomColors = (e) => {
  const randomColor = Math.floor(16 ** 6 * Math.random()).toString(16);
  e.target.style.backgroundColor = `#${randomColor}`;
};

const canvasElementCreator = (e) => {
  const numberOfElements = Number(e) ** 2;
  for (let i = 0, len = numberOfElements; i < len; i++) {
    eval(`canvasElement${i} = document.createElement("div")`);
    eval(`canvasElement${i}.classList.add("canvas-element")`);
    eval(`canvas.appendChild(canvasElement${i})`);
  }
};

const resetButton = document.querySelector(".clear");
resetButton.addEventListener("click", () => {
  const elements = document.querySelectorAll("div.canvas-element");
  elements.forEach((element) => {
    element.style.backgroundColor = "white";
  });
});

const slideButton = document.querySelector("input");
slideButton.addEventListener("change", (e) => {
  // initialize
  const elementsBefore = document.querySelectorAll("div.canvas-element");
  elementsBefore.forEach((element) => {
    element.parentNode.removeChild(element);
  });
  // refresh values to input specific range
  canvasElementCreator(e.target.value);
  const elementsAfter = document.querySelectorAll("div.canvas-element");
  const numberOfSquaresPerSide = Number(e.target.value);
  elementsAfter.forEach((element) => {
    element.style.minHeight = `${pixels / numberOfSquaresPerSide}px`;
    element.style.maxHeight = `${pixels / numberOfSquaresPerSide}px`;
    element.style.minWidth = `${pixels / numberOfSquaresPerSide}px`;
    element.style.maxWidth = `${pixels / numberOfSquaresPerSide}px`;
    element.addEventListener("mouseover", hoverRandomColors);
  });
});

const initialElements = 10;
canvasElementCreator(initialElements);
const numberOfSquaresPerSide = Number(initialElements);
const elements = document.querySelectorAll("div.canvas-element");
elements.forEach((element) => {
  element.style.minHeight = `${pixels / numberOfSquaresPerSide}px`;
  element.style.maxHeight = `${pixels / numberOfSquaresPerSide}px`;
  element.style.minWidth = `${pixels / numberOfSquaresPerSide}px`;
  element.style.maxWidth = `${pixels / numberOfSquaresPerSide}px`;
  element.addEventListener("mouseover", hoverRandomColors);
});
