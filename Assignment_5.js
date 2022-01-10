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
