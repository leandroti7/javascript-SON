// console.log('hello test');
//trabalhando com prompt
/*
var age = prompt('Qual sua idade ?');
var ageParse = parseInt(age);
console.log(age);

switch (true){
    case (ageParse < 18):
        alert("Você não está autorizado");
    break;

    case  (ageParse > 18):
        alert("Você está autorizado");
    break;

    default:
        alert("Você não preencheeu nada");
}*/
/*

//função em variavel
function myFunction(name) {
    console.log('Name =>', name);
}

myFunction("Leandro");
*/


/*
//Arrays
var ex = [
    'leandro',
    'Souza'
];

ex.push('Da Silva');

ex.pop();

ex.unshift("El rei");

var ex1 = ['Muito Sono'];
var result = ex.concat(ex1);
ex.concat(ex1);
console.log(result);*/


/*
//criando um input select automatico
var body1 = document.getElementsByTagName('body');

var select = document.createElement('select');

body1[0].appendChild(select);

for (var i =0; i < 8; i++){
    var option = document.createElement('option');
    option.id = "id_" + i;
    option.value = i;
    option.innerHTML = i;
    select.appendChild(option);
}
*/

var body1 = document.getElementsByTagName('body');
var title = document.createElement('h1');
body1[0].appendChild(title);


title.id = '#id_Unique';
title.value = 'son';
title.innerHTML = 'School of Net';
title.style.background = '#4accbb';
title.style.width = '200px';
title.style.height = '200px';
title.style.marginLeft = 'auto';
title.style.marginRight = 'auto';
title.style.marginTop = '150px';

