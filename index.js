"use strict" 

// variables for LOOPING
let i, j, k, l;

// variable declearation 
let table, tableRow, tableData;
let dynamicTableMaker;
let rowNum, colNum;
let cellBackgroundColor, cellSize;
let idNo = 0;




// function to  to create table 
const makeTable = () => {

    // elements creation
    table = document.createElement("table");
    tableRow = document.createElement("tr");
    tableData = document.createElement("td");
    rowNum = document.getElementById("row-num");
    colNum = document.getElementById("col-num");
    dynamicTableMaker = document.getElementById("submit-table");

    // loop to generate tables 
    for (let i=0; i<=rowNum.value; i++) {
        for (let j=0; j<colNum.value;j++) {
            tableRow.appendChild(tableData);
            tableData = document.createElement("td");
            tableData.setAttribute("id", idNo);
            idNo++;
        }
        tableRow = document.createElement("tr");
        table.appendChild(tableRow);
        document.getElementById("dynamic-table").appendChild(table);
    }

    // cell dimension 
    cellSize = document.getElementById("cell-size");
    let td = document.getElementsByTagName("td");
        for (k=0; k<td.length; k++){
            td[k].style.height = cellSize.value + "px";
            td[k].style.minWidth = cellSize.value + "px";
        }
}
makeTable();


// dynamic table maker
dynamicTableMaker.addEventListener("click", () => {
    if (rowNum.value <= 100 && colNum.value <= 100 && rowNum.value >=0 && colNum.value >= 0) {
        document.getElementById("dynamic-table").removeChild(table);
        makeTable();
    } else {
        document.getElementById("overcount-alert").style.display = "inline";
        document.getElementById("overcount-alert").style.opacity = "1";
        setTimeout(() => {
            document.getElementById("overcount-alert").style.display = "none";
            document.getElementById("overcount-alert").style.opacity = "0";
        }, 2000);
    }

    // default cell sizing 
        let td = document.getElementsByTagName("td");
        for (k=0; k<td.length; k++){
            td[k].style.height = cellSize.value + "px";
            td[k].style.minWidth = cellSize.value + "px";
        }
});




// change cell size dynamically 
const dynamicCellSize = () => {
    cellSize = document.getElementById("cell-size");
    cellSize.addEventListener("input", () => {
        cellSize = document.getElementById("cell-size"); 
        let td = document.getElementsByTagName("td");
        for (k=0; k<td.length; k++){
            td[k].style.height = cellSize.value + "px";
            td[k].style.minWidth = cellSize.value + "px";
        }
    });
}
dynamicCellSize();

// color the cell on right click and removing context menu    
document.addEventListener("contextmenu", (e) => {
    if (e.target.tagName === "TD") {
        let id = e.target.id;
        document.getElementById(id).style.backgroundColor = "unset";
        document.getElementById(id).style.border = "1px solid rgba(0, 0, 0, 0.137)";
        e.preventDefault(); 
    }
});


// to put color 
document.addEventListener("click", (e) => {
    if (e.target.tagName === "TD") {
        cellBackgroundColor = document.getElementById("cell-background-color");
        let id = e.target.id;
        document.getElementById(id).style.backgroundColor = cellBackgroundColor.value;
        document.getElementById(id).style.border = "1px solid " + cellBackgroundColor.value;
        e.preventDefault();
    }
});


// circle or ractangle 
cellBackgroundColor = document.getElementById("cell-background-color");
document.getElementById("ractangle-canvas").style.background = cellBackgroundColor.value;
document.getElementById("circle-canvas").style.background = cellBackgroundColor.value;
document.getElementById("circle-canvas").addEventListener("click", () => {
    let td = document.getElementsByTagName("td");
    for (k=0; k<td.length; k++){
        td[k].style.borderRadius = "50%";
    }
});
document.getElementById("ractangle-canvas").addEventListener("click", () => {
    let td = document.getElementsByTagName("td");
    for (k=0; k<td.length; k++){
        td[k].style.borderRadius = "0%";
    }
});