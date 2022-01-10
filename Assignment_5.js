//Varaibles used in various functions
const container = document.getElementById("container");
const addRowBtn = document.getElementById("rowBtn")
const addColBtn = document.getElementById("colBtn")
const tableRef = document.getElementById("box")
const delRowBtn = document.getElementById("delRow")
const delColBtn = document.getElementById("delCol")
const colorInput = document.getElementById("colorInput")
const fillBtn = document.getElementById("fillBtn")
const resetBtn = document.getElementById("resetBtn")
const fillEmpty = document.getElementById("fillEmpty")
let colorNum = "black"
let newCell
let table = document.getElementById("mytab1");
var down = false;
var row = -1
var col = 1



//Adds rows to the table
addRowBtn.addEventListener("click", function () {
    for (let i = 0; i < 1; i++) {
        let newRow = tableRef.insertRow(-1);
        for (let k = 0; k < col; k++) {
            newCell = newRow.insertCell(0);
            newCell.className = "grid-item";
            newCell.style.backgroundColor = "white"
        }
    }
    row++
})

//Adds columns to the table
addColBtn.addEventListener("click", function () {
    console.log("rowtest")
    if (row === -1) {
        let newRow = tableRef.insertRow(-1);
        newCell = newRow.insertCell(0);
        newCell.className = "grid-item";
        newCell.addEventListener("mousedown", changeColor, false)
        newCell.style.backgroundColor = "white"
        row++
    } else {
        for (let i = 0; i < tableRef.rows.length; i++) {
            let newRow = tableRef.rows[i];
            newCell = newRow.insertCell(0);
            newCell.className = "grid-item";
            newCell.addEventListener("mousedown", changeColor, false)
            newCell.style.backgroundColor = "white"
        }
        col++
    }
})

//Function to fill all cells with a color
fillBtn.addEventListener("click", function (e) {
    console.log("fill")
    for (let i = 0, rowTemp; rowTemp = table.rows[i]; i++) {
        for (let j = 0, columnTemp; columnTemp = rowTemp.cells[j]; j++) {
            table.rows[i].cells[j].style.backgroundColor = colorNum
        }
    }
})

//Deletes rows from the table
delRowBtn.addEventListener("click", function () {
    let newRow = tableRef.rows[row]
    tableRef.deleteRow(0)
    if (row > -1) {
        row--
    }
    if (row == -1) {
        col = 1
    }
})

///Deletes columns from the table
delColBtn.addEventListener("click", function () {
    for (let i = 0; i < tableRef.rows.length; i++) {
        let newRow = tableRef.rows[i];
        newCell = newRow.deleteCell(-1);
    }
    if (col > 1) {
        col--
    }
})

//Resets all cells back to white
resetBtn.addEventListener("click", function (e) {
    for (let i = 0, rowTemp; rowTemp = table.rows[i]; i++) {
        for (let j = 0, columnTemp; columnTemp = rowTemp.cells[j]; j++) {
            table.rows[i].cells[j].style.backgroundColor = "white"
        }
    }
})
//Grads RGB value from color selector
colorInput.addEventListener('input', function (e) {
    colorNum = colorInput.value
})
//changes color of target
function changeColor(e) {
    e.target.style.backgroundColor = colorNum
}
//on click change cell color
tableRef.addEventListener("mousedown", function (e) {
    console.log("down")
    e.target.style.backgroundColor = colorNum
    console.log(down)
})
