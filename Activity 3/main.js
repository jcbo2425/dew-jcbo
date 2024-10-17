//write your JS code here:

/* Chuleta
            window.open([url],[nombre],[sizeH-W]) \ abre una ventana o pestaña
            debugger \ detiene la repro del código
            element.document.write("")
            window.location.href([url]) \ cambia la url de la ventana actual
*/

/*
//Op1
let blankW = window.open('','','width= 200, height=100');
*/

/*
//Op2
let msgWindow1 = window.open('','msgWindow','');
msgWindow1.document.write("Some text");


//Op3
let msgWindow2 = window.open('','msgWindow','');
msgWindow2.document.write("some other text");

//Op4
window.location.replace('https://example.com');

//Op5
let customWindow = window.open('','','toolbar=yes, resizable=yes, width=200, height= 200, left=200, top=100');
debugger;

//Op6
let window6 = window.open('','tempWindow','');
setTimeout(() => {
    window6.close();
}, 2000); //Cierra la ventana después de 2s
window6.close();
debugger;


//Op7
let openerWindow = window.open('','','');
openerWindow.opener.document.write('some window text'); //Escribe el texto en la ventana que la creó
debugger;

//Op8
let iframe = document.createElement('iframe');
iframe.src = 'iframe.html'
document.body.appendChild(iframe);
iframe.onload = function() {
    let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.write('some text');
}
debugger;*/

//Op9
let iframe2 = document.createElement('iframe');
iframe2.src = 'iframe.html'; // Asegúrate de que existe
document.body.appendChild(iframe2); // se añade el iframe al cuerpo del documento
iframe.onload = function() { //cargamos el iframe
    let iframeDoc = iframe2.contentDocument || iframe2.contentWindow.document;
    console.log(iframeDoc.body.innerHTML);
};