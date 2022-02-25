/*
1) Escreva um algoritmo que armazene o valor 10 em uma variável A e o valor 20 em uma variável B.
A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo com que o
valor que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram armazenados
nas variáveis.
*/
var resul = document.getElementById('one');
resul.addEventListener("onclick", move);

function move(){
    var resul = document.getElementById('one');
    var a = 10;
    var b = 20;
    var c = a;
    var d = b;
    var a = d;
    var b = c;

    alert("sssssss")

    resul.innerHTML(`a = ${a} e b = ${b}`);
}
