const cont = document.querySelector("#container");

let rowDiv;
let pixelDiv;

function createRow (rowNumber){
    rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    rowDiv.setAttribute(`id`,`row${rowNumber}`);
    cont.appendChild(rowDiv);
}

function createCell(rowNumber, cellNumber){
    pixelDiv = document.createElement("div");
    pixelDiv.classList.add("pixel");
    pixelDiv.setAttribute(`id`,`pixel${rowNumber}-${cellNumber}`);
    document.querySelector(`#row${rowNumber}`).appendChild(pixelDiv);
}

for (let i = 0; i < 16;i++){
    createRow(i);
    for (let j = 0; j < 16; j++){
        createCell(i,j);
    }
}