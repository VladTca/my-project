console.log("Дорогу осилит идущий");
//test
// let  prod = Number ( prompt () );
//console.log(prod+5);
const readline = require('readline').createInterface({

    input: process.stdin,

    output: process.stdout

});

readline.question('Как вас зовут?', name => {

    console.log(name);

    readline.close();

});
// let prod = prompt ('mnf');
