const cont = document.querySelector("#container");
const button = document.querySelector("#resize")

let rowDiv;
let pixelDiv;

button.addEventListener(`click`,resizeGrid);

function resizeGrid(){
    let promptMessage = `What dimensions do you want your grid to be (X by X)? Enter a number between 1 and 100.`;
    let newSize = prompt(promptMessage);
    newSize = Number(newSize);
    console.log(newSize)
    while (isNaN(newSize)
        || newSize < 1
        || newSize > 100
        || newSize != Math.round(newSize)){
        console.log(newSize)
        if (newSize === null) return;
        alert(`Invalid input`);
        newSize = prompt(promptMessage);
    }

}

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
    pixelDiv.addEventListener(`mouseenter`,(e) => {
        e.target.style.backgroundColor = 'black';
    });
    document.querySelector(`#row${rowNumber}`).appendChild(pixelDiv);
}


for (let i = 0; i < 16;i++){
    createRow(i);
    for (let j = 0; j < 16; j++){
        createCell(i,j);
    }
}