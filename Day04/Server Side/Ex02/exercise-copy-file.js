// Dein Code hier....

function copyfile(__filename) {
    console.log("called!")

    const fs = require('fs');
    fs.copyFile(__filename, (__filename+".cpy"), (error) => {
        if (error) throw error;
        console.log('source.txt was copied to destination.txt');
    });
}



module.exports = copyfile;