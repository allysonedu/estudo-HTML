//function expression
//function anonnymous

// parametros (parameters)
//________________________________________________________;
/*const sum = function (number1, number2) {
  total = number1 + number2;

  return total;
};

let number1 = 54;
let number2 = 48;

console.log(`o numero 1 e ${number1}`);
console.log(`o numero 2 e ${number2}`);
console.log(`a soma e ${sum(number1, number2)}`);*/
//_______________________________________;
// funcion acope

/*let subject = 'create video';
function createThink(subject) {
  subject = 'study';
  return subject;
}
console.log(createThink(subject));
console.log(subject);*/
//________________________________________________________;

// function hoisting

/*sayMyName();

function sayMyName() {
  console.log('allyson');
}*/
//______________________________________________

// arrow function

/*const sayMyName = () => {
  console.log('allyson');
};
sayMyName();*/
//__________________________________________

// callback funtion

/*function sayMyName(name) {
  console.log(name);
}
sayMyName(() => {
  console.log('estou em uma callback');
});*/
//__________________________________________________

/* 
function () constructor

* expressao new 
* criar um novo objeto
* this keyword 


function Person(name) {
  this.name = name;
}
const mayk = new Person('mayk');
const allyson = new Person('allyson');
console.log(allyson);
console.log(mayk);*/

//_______________________________________________________

/* 
prototype
* prototype-based language
* prototype chain
*__pronto__
SS
*/

//___________________________________________________________________

//manipulando strings e numeros
//trasformando string em Numero e Numero em string
/*
let string = '123';
console.log(Number(string));
let number = 321;
console.log(String(number));
*/
//__________________________________________________________

//manipulando strings e numeros

//contar quantos caracteres tem uma palavra e quantos
//digitos tem um numero
/*
let word = 'parall';
console.log(word.length);
let number = 1234;
console.log(String(number).length);
*/

//___________________________________________________________________

//manipulando strings e numeros

// Transformar um numero quebrado com 2 casas decimais e troca pronto por virgula

/* let number = 345.35353553535;
console.log(number.toFixed(2).replace('.', ','));
*/
//______________________________________________________________

//manipulando strings e numeros

//Transformando letras minusculas em
//maiusculas. faça o contrario disso tambem
/*
let word = ' meu nome nao e jhoony ';
console.log(word.toLowerCase().toUpperCase());
*/

//_______________________________________________________

//manipulando arrays

// criar Array com construtor

/*let myArray = new Array('a', 'd', 'c');

console.log(myArray);
*/
//___________________________________________________________

//manipulando arrays
// contar elementos de um array
/*
console.log(['a', 'b', 'c'].length);
*/

//______________________________________________________________
/*
// manipulando Arrays
let techs = ['html', 'css', 'js'];
//adicionado um item no fim
techs.push('nodejs');
//adicionar no começo
techs.unshift('sql');
//remover do fim
techs.pop();
//remover do começa
techs.shift();
//pegar somente alguns elementos do array
console.log(techs.slice(1));
//remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 1);
//encontrar a posição de um elemento no array

let index = techs.indexOf('tal dados');
techs.splice(index, 1);

console.log(techs);
*/

//_______________________________________________________________
/*
 - expression
 - opertors
   Binary
   Unary
   Ternary

 

let number;

(function () {
  console.log('alo');
});
*/

//__________________________________---________------------

/*
new 
* left-hand-side expression
*criar um novo objeto


let name = new String('allyson');
name.surName = 'eduuu';
let age = Number(23);

console.log(name.surName, age);
*/
//----------------------------------------------------------

/**
 * Operadores unarios
 * typeof
 * delete
 */

/*const person = {
  name: ' allyson ',
  age: 25,
};
delete person.age

console.log(typeof 'mayk');
*/
//----------------------------------------------------

// resto da divisao %
