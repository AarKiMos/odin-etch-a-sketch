function calcAndSetPixelSize() {
  let maxLength = Math.min(
    sketchContainer.clientWidth,
    sketchContainer.clientHeight
  );

  maxLength -= 8; // Subtract padding
  let pixelSize = Math.floor((maxLength - (gridSize + 1) * 1) / gridSize);
  pixelSizeStyle.innerHTML = `.pixel-size { width: ${pixelSize}px; height: ${pixelSize}px; }`;
}

function createGrid() {
  let sketchBox = document.createElement("div");
  sketchBox.classList.add("sketch-box");

  calcAndSetPixelSize();

  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.id = i.toString();
    row.classList.add("row");

    for (let j = 0; j < gridSize; j++) {
      let pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.classList.add("pixel-size");
      pixel.id = i.toString() + j.toString();
      pixel.addEventListener("mouseenter", (e) =>
        e.target.classList.add("pixel-fill")
      );
      row.appendChild(pixel);
    }
    sketchBox.appendChild(row);
  }
  return sketchBox;
}

let gridSize = 16;
const sketchContainer = document.getElementById("sketch-container");

window.addEventListener("resize", (e) => {
  calcAndSetPixelSize();
});

let pixelSizeStyle = document.createElement("style");
pixelSizeStyle.type = "text/css";
document.getElementsByTagName("head")[0].appendChild(pixelSizeStyle);

sketchContainer.appendChild(createGrid(gridSize));

const sizeButton = document.getElementById("size-prompt-btn");
sizeButton.addEventListener("click", (e) => {
  let newSize = Number(prompt("Enter size of grid. Min 10, Max 100"));
  if (isNaN(newSize) || newSize < 10 || newSize > 100) {
    alert("Invalid input!!");
    return;
  }

  gridSize = newSize;
  sketchContainer.removeChild(sketchContainer.firstChild);
  sketchContainer.appendChild(createGrid(gridSize));
});
