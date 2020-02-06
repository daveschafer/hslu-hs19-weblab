

//delay(2000, 'hallo').then(console.log);


function delay(ms, message) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(message), ms);
    });
};


module.exports = delay;