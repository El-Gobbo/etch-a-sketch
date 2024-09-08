const cont = document.querySelector("#container");



let rowDiv;
let pixelDiv;

for (let i = 0; i < 16;i++){
    rowDiv = document.createElement("div");
    rowDiv.style.border = "2px solid black";
    rowDiv.classList.add("row");
    rowDiv.setAttribute(`id`,`row${i}`);
    cont.appendChild(rowDiv);
    for (let j = 0; j < 16; j++){
        pixelDiv = document.createElement("div");
        pixelDiv.classList.add("pixel");
        pixelDiv.setAttribute(`id`,`pixel${i}-${j}`);
        document.querySelector(`#row${i}`).appendChild(pixelDiv);
    }
}