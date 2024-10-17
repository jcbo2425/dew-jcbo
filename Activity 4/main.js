var employees = [
    {"id":1,"name":"MIRIAM CASTIÑEIRA BREA","department":"IT"},
    {"id":2,"name":"GONZALO MULET FIGUERAS","department":"IT"},
    {"id":3,"name":"FRANCISCO JOSE GRAÑA BARBERA","department":"IT"},
    {"id":4,"name":"IRENE POMBO JORDA","department":"HR"}
];

/*
employees.forEach(empl => {
        console.log(empl.id+' '+empl.name+' '+empl.department);
    });
*/


//function listEmployees(data){
    let table = document.getElementById("table-container");
    let content = "<table> \
                            <tr> \
                                <th class='title' colspan='3'> EMPLOYEES </th> \
                            </tr> \
                            <tr> \
                                <th> ID </th><th> NAME </th><th> DEPT </th> \
                            </tr>";
    employees.forEach(empl => {
        content += "<tr> \
                                <td>"+empl.id+"</td> \
                                <td>"+empl.name+"</td> \
                                <td>"+empl.department+"</td> \
                            </tr>";
    });
    content += "</table>";
    table.innerHTML = content;
//}