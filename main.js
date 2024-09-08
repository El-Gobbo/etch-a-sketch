const cont = document.querySelector("#container");



let rowDiv;
let pixelDiv;
let windowHeight = window.innerHeight;
let pixelHeight = windowHeight/16;
let windowWidth = window.innerWidth;
let pixelWidth = windowWidth/16;

for (let i = 0; i < 16;i++){
    rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    rowDiv.setAttribute(`id`,`row${i}`);
    rowDiv.style.width = windowWidth;
    rowDiv.style.height = pixelHeight;
    cont.appendChild(rowDiv);
    for (let j = 0; j < 16; j++){
        pixelDiv = document.createElement("div");
        pixelDiv.classList.add("pixel");
        pixelDiv.style.width = pixelWidth;
        pixelDiv.style.height = pixelHeight;
        pixelDiv.setAttribute(`id`,`pixel${i}-${j}`);
        document.querySelector(`#row${i}`).appendChild(pixelDiv);
    }
}