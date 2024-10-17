let table = document.getElementById("div-table");

//Generate a table
function createTable(){
    let r = document.getElementById("row").value;
    let c = document.getElementById("col").value;
    let tcontent = "<table>";
    for (let i = 0; i < r; i++) { //Loop: for each row ('r' times)...
        tcontent += "<tr>";
        for (let j = 0; j < c; j++) { // ..generate 'c' columns with other loop
            tcontent += "<td> R"+(i+1)+"C"+(j+1)+"</td>";
        }
        tcontent += "</tr>";
    }
    tcontent += "</table>";
    table.innerHTML = tcontent
}

//Delete table
function deleteTable(){
    table.innerHTML = "";
}