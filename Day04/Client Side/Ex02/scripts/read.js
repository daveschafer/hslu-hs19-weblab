console.log("Reader started");
let bodyread_byelement = window.document.body.querySelector("div");
let bodyread_byattribut = window.document.body.querySelector('[data-hslu-module="internet topics"]');



console.log("by element: "+ bodyread_byelement.outerHTML);
console.log("by attribut: "+ bodyread_byattribut.outerHTML);


//Replacing

//Getting element again by ID and replacing it
//document.getElementById("internet topics").setAttribute('data-hslu-module', 'weblab');
bodyread_byelement.setAttribute('data-hslu-module', 'weblab');

//Readout by div again
bodyread_byelement = window.document.body.querySelector("div");
console.log("by element [new]: "+ bodyread_byelement.outerHTML);

//////////
//Changing actual text

console.log(window.document.getElementById("thisone").innerText);


setTimeout(() => {  window.document.getElementById("thisone").innerText = "General Kenobi!"; }, 2000);