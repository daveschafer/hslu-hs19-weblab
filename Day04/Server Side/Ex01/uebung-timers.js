const theOnlyFunction = delay => {
};

// “Hallo Web-Programming-Lab nach 4 Sekunden”    

function myFunc() {
    console.log('Hallo Web-Programming-Lab');
}

//1
//setTimeout(myFunc, 4000);
//setTimeout(myFunc, 8000);

//2
//setInterval(myFunc, 3000);

//3
  //  setInterval(myFunc, 3000);

//4

function canc(timerid){
    clearTimeout(timerid);
}

let timerId = setTimeout(function tick() {
    console.log("hello weblab")
    timerId2 = setTimeout(canc(timerid), 5000); // (*)
  }, 1000);


// “Hallo Web-Programming-Lab nach 8 Sekunden”
