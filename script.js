const gridSize = 16;

const sketchContainer = document.getElementById("sketch-container");

const totalWidth = 600;

for (let i = 0; i < gridSize; i++) {
  let row = document.createElement("div");
  row.id = i.toString();
  row.classList.add("row");
  for (let j = 0; j < gridSize; j++) {
    let pixel = document.createElement("div");
    pixel.style.width = totalWidth / gridSize + "px";
    pixel.style.height = totalWidth / gridSize + "px";
    pixel.classList.add("pixel");
    pixel.id = i.toString() + j.toString();

    row.appendChild(pixel);
  }
  sketchContainer.appendChild(row);
}
