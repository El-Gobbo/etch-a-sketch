const cont = document.querySelector("#container");
const button = document.querySelector("#resize")

let rowDiv;
let pixelDiv;
let targetPixel;

button.addEventListener(`click`,resizeGrid);

cont.addEventListener('mouseover',(e) =>{
    targetPixel = '#' + e.target.id;
    document.querySelector(targetPixel).style.backgroundColor = 'black';
})

function resizeGrid(){
    let promptMessage = `What dimensions do you want your grid to be (X by X)? Enter a number between 1 and 100.`;
    let newSize = prompt(promptMessage);
    newSize = Number(newSize);
    while (isNaN(newSize)
        || newSize < 1
        || newSize > 100
        || newSize != Math.round(newSize)){
        if (newSize === null) return;
        alert(`Invalid input`);
        newSize = prompt(promptMessage);
    }
    cont.textContent = ``;
    createRow(newSize);
}

function createRow(numberOfRows){
    for (let i = 0; i < numberOfRows; i++){
        rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        rowDiv.setAttribute(`id`,`row${i}`);
        cont.appendChild(rowDiv);
        createCell(numberOfRows, i);
    }
}

function createCell(numberOfRows,rowNumber){
    for (let j = 0; j < numberOfRows; j++){
        pixelDiv = document.createElement("div");
        pixelDiv.classList.add("pixel");
        pixelDiv.setAttribute(`id`,`pixel${rowNumber}-${j}`);
        document.querySelector(`#row${rowNumber}`).appendChild(pixelDiv);
    }
}

createRow(16);