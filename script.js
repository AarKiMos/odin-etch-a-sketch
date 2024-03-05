function handleResize(gridSize) {
  let maxLength = Math.min(
    sketchContainer.clientWidth,
    sketchContainer.clientHeight
  );

  maxLength -= 8; // Subtract padding
  let pixelSize = (maxLength - (gridSize + 1) * 1) / gridSize;
  pixelSizeStyle.innerHTML = `.pixel-size { width: ${pixelSize}px; height: ${pixelSize}px; }`;
}

function createGrid(gridSize) {
  let sketchBox = document.createElement("div");
  sketchBox.classList.add("sketch-box");

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

const gridSize = 40;
const sketchContainer = document.getElementById("sketch-container");

window.addEventListener("resize", (e) => {
  handleResize(gridSize);
});

let pixelSizeStyle = document.createElement("style");
pixelSizeStyle.type = "text/css";
document.getElementsByTagName("head")[0].appendChild(pixelSizeStyle);

handleResize(gridSize);

sketchContainer.appendChild(createGrid(gridSize));
