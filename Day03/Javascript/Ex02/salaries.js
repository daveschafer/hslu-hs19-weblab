// Dein Code hier

function sum(obj) {

    let totalsum = 0;

    for (let key in obj) {
        totalsum = totalsum + obj[key]
    }
    return totalsum
}

module.exports = sum