fetch("employees.json")
.then(request => request.json()) 
.then(
    function (json){
        let table = document.getElementById("table-container")
        let content = "<table> \
                            <tr> \
                                <th class='title' colspan='3'> EMPLOYEES </th> \
                            </tr> \
                            <tr> \
                                <th> ID </th><th> NAME </th><th> DEPT </th> \
                            </tr>";
        json.forEach(empl => {
            content += "<tr> \
                                    <td>"+empl.id+"</td> \
                                    <td>"+empl.name+"</td> \
                                    <td>"+empl.department+"</td> \
                                </tr>";
        });
        content += "</table>";
        table.innerHTML = content;
    }
);

//JSON.parse() \\ JSON:stringify() para pasar de json a string o viceversa

