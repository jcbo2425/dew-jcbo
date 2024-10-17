document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementsByTagName("form")[0];
    form.addEventListener('submit', function(event){
        event.preventDefault();
    });
})

const firstName = document.getElementById('validationDefault01').value;
const lastName = document.getElementById('validationDefault02').value;
const idNum = document.getElementById('validationDefault04').value;
const zip = document.getElementById('validationDefault05').value;

let isValid = true;
let errMessage = "";

if (!/^[A-Z]/.test(firstName)) {
    isValid = false;
    errMessage += "El nombre debe comenzar con mayúscula.\n";
}

if (!/^[A-Z]/.test(lastName)) {
    isValid = false;
    errMessage += "El apellido debe comenzar con mayúscula.\n";
}

if (!/^\d{5}$/.test(zip)) {
    isValid = false;
    errMessage += "El código postal debe contener exactamente 5 números.\n";
}

if (idNumber.trim() === "") {
    isValid = false;
    errMessage += "El número de identificación no puede estar vacío \n";
}