// Functions
const canvas = document.querySelector("#canvas");
const canvasElementCreator = (n = 64) => {
  for (let i = 0, len = n; i < len; i++) {
    eval(`canvasElement${i} = document.createElement("div")`);
    eval(`canvasElement${i}.classList.add("canvas-element", "element-${i}")`);
    eval(`canvas.appendChild(canvasElement${i})`);
  }
};

// DOM manupulation
canvasElementCreator();

const hoverRandomColors = (e) => {
  e.target.style.backgroundColor = `black`;
};

const canvasElement = document.querySelectorAll("div.canvas-element");

canvasElement.forEach((element) => {
  element.addEventListener("mouseover", hoverRandomColors);
});
