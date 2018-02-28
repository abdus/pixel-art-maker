"use strict"




// this shit is working, please don't touch it even by mistake 

// table building 
let m = 10;
let n = 10;
let createDynamicTable = document.getElementById("submit-table");
let bodyWidth = (n * 20) + 50;
let k=0;
let button = document.createElement("button");
let lineBrake =  document.createElement("br");
let colorPixel = document.getElementById("choose-color").value; 



// function to build table 
const createTable = () => {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            button = document.createElement("button");
            button.setAttribute("id", "button" + [k]);    // added a class to button element for applying event listener
            document.getElementById("dynamic-table").appendChild(button);
            k++;
        } 
        button = document.createElement("button");
        lineBrake =  document.createElement("br");
        button.setAttribute("class", "button");       // added a class to button element for applying event listener
        document.getElementById("dynamic-table").appendChild(button.appendChild(lineBrake));
    }
}

// for keeping the background color of submit button white else it will be red on click 
document.getElementById("submit-table").addEventListener("click", function(){
    document.getElementById("submit-table").style.backgroundColor = "white";
});

// event listener for color 
document.getElementById("choose-color").addEventListener("input", function(){
    colorPixel = document.getElementById("choose-color").value; 
})


// event listener for table coloring 
document.addEventListener('click', function(e){
    if(e.target.tagName=="BUTTON" && document.getElementById(e.target.id).style.backgroundColor == ""){
        let buttonId = e.target.id;
        document.getElementById(buttonId).style.backgroundColor = colorPixel;  
    } else {
        let buttonId = e.target.id;
        document.getElementById(buttonId).style.backgroundColor = "";
    }
});
// ================================================================
createTable();
createDynamicTable.addEventListener("click", function(){
    if (document.getElementById("row-num").value <=100 && document.getElementById("col-num").value <= 100) {
        document.getElementById("dynamic-table").innerHTML = "";
        m = document.getElementById("row-num").value;
        n = document.getElementById("col-num").value; 
        createTable();
        // set a minimum body width dynamically 
        bodyWidth = (n * 20) + 50;
        document.getElementsByTagName("body")[0].style.minWidth = bodyWidth + "px";
    } else {
        alert("Rows and Columns count should be less than 100");
    }
});
