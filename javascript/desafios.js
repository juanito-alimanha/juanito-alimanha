//DESAFIOS//

/* Este archivo tiene como fnalidad almacenar 
los desafios de clase*/

/*1. Crear una variable y asignarle su nombre, crear una constante y asignarle su
edad, luego imprimir en consola: Hola, soy ____ y tengo ____ años.*/

/*let nombre = 'Juan Jose Aguirre';
const miEdad = 24 ;


console.log('Hola, soy' , nombre , 'y tengo' , miEdad , 'años.');
console.log(`Hola, soy ${nombre} y tengo  ${miEdad}  años`);*/
/* FUNCIONES */
/*function miFuncion() {
    console.log('Pepita Pérez');
  }
  
  miFuncion();*/


  /*2. Crear una función llamada presentarme, dentro crear una variable y asignarle
su nombre, crear una constante y asignarle su edad, luego imprimir en consola:
Hola, soy ____ y tengo ____ años.*/

/*function presentarme() {
let nombre = 'Juan Jose Aguirre';
const miEdad = 24 ;
console.log(`Hola, soy ${nombre} y tengo ${miEdad} años.`);
}*/

/*  3. Crear una función que reciba un nombre y edad por parámetros, luego imprimir
en consola: Hola, soy ____ y tengo ____ años.

/*function presentacion (nombre, edad){
console.log(`Hola, soy ${nombre} y tengo ${edad} años.`);
}
presentacion('Juan Jose',edad);*/

/* 4. Crear una función que reciba un nombre, un apellido y una edad por parámetros,
la función debe imprimir en consola: Su nombre es ____ y usted tiene ____ años,
si no se recibe la edad imprimir: Su nombre es ____ y usted tiene 100 años.*/

/*function presentacion (nombre, apellido, edad = 100){
console.log(`Su nombre es ${nombre} ${apellido} y usted tiene ${edad} años.`);
}
presentacion('Alberto','Gutierrez');*/

/*5. Crear una función que reciba dos párametros, un nombre y un apellido y retorne
el nombre completo, primero el apellido y luego el nombre.*/
/*
function presentacion (nombre, apellido){
return
console.log(`Su nombre es ${nombre} ${apellido} `);
}
let valorRetornado = presentacion
presentacion('Alberto','Gutierrez');
*/

// Desafio #6


// Desafio #7

// Crear una función para saludar, si la función recibe un nombre, imprimir por consola: Hola, ____! Si la función no recibe un nombre, imprimir: Hola, desconocido!

/*
function desafio7(nombre = 'desconocido'){
  console.log(`Hola, ${nombre}!`)
}

desafio7('Jose');
desafio7();

*/

// Desafio #8
/* Crear 5 funciones, (sumar, restar, multiplicar, dividir, modulo), dede recibir 2 numeros e imprimir el resultado asi:
Ej: entrada: 8,4
Ej: salida: 8 + 4 = 12 */

/*function sumar(a, b){
  const resultado = a + b;
  console.log(`${a} + ${b} = ${resultado}`);
  
}

sumar(8, 4);
sumar(100,25);

function restar(a, b){
  const resultado = a - b;
  console.log(`${a} - ${b} = ${resultado}`);
  
}

restar(8, 4);
restar(100,25);

function multiplicar(a, b){
  const resultado = a * b;
  console.log(`${a} x ${b} = ${resultado}`);
  
}

multiplicar(8, 4);
multiplicar(100,25);

function dividir(a, b){
  const resultado = a / b;
  console.log(`${a} / ${b} = ${resultado}`);
  
}

dividir(8, 4);
dividir(100,25);

function modular(a, b){
  const resultado = a % b;
  console.log(`${a} % ${b} = ${resultado}`);
  
}

modular(8, 4);
modular(100,5);

function potenciar(a, b){
  const resultado = a ** b;
  console.log(`${a} ^${b} = ${resultado}`);
  
}

potenciar(8, 4);
potenciar(100,5);*/


/*
9. - Crear seis funciones, (suma, resta, multiplica, divide, módulo, potencia),
cada función debe recibir 2 números y retornar un resultado según corresponda.
  - Crear otra función que reciba el nombre de la operación y 2 números,
debe imprimir el resultado.
*/
/*
function sumar(a, b){
  return a+b;
}
function restar(a, b){
  return a-b;
}
function multiplicar(a, b){
  return a*b;
}
function dividir(a, b){
  return a/b;
}
function modular(a, b){
  return a%b;
}
function potenciar(a, b){
  return a%b;
}

function operar(operacion , a, b){
  let resultado;

if (operacion === 'suma') {
  resultado = sumar(a, b);
  console.log(`${a} + ${b} = ${resultado}`);
}
if (operacion === 'resta') {
  resultado = restar(a, b);
  console.log(`${a} - ${b} = ${resultado}`);
}
if (operacion === 'multiplicacion') {
  resultado = multiplicar(a, b);
  console.log(`${a} * ${b} = ${resultado}`);
}
if (operacion === 'division') {
  resultado = dividir(a, b);
  console.log(`${a} / ${b} = ${resultado}`);
}
if (operacion === 'modulacion') {
  resultado = modular(a, b);
  console.log(`${a} % ${b} = ${resultado}`);
}
if (operacion === 'potencia') {
  resultado = potenciar(a, b);
  console.log(`${a} ** ${b} = ${resultado}`);
}
}

operar('suma', 9, 3);
operar('resta', 9, 3);
operar('multiplicacion', 9, 3);
operar('division', 9, 3);
operar('modulacion', 9, 3);
operar('potencia', 9, 3);*/

/*10. Crear una función que reciba 4 números, mostrar el resultado de: a/b*(c+d)*/
/*
function operar(a, b, c, d){
return  a/b*(c+d);
}
let resultado = operar(68, 2, 3, 9);
console.log(resultado);*/

/*11. Crear una función que reciba 2 números, imprimir el mayor*/
/*
function comparar(a, b){
if (a>b) {
console.log('el numero mayor es', a);
} else {
  console.log('el numero mayor es', b);
}
}
comparar(8, 5);*/

/*12. Crear una función que reciba 1 número, imprimir si es negativo o si es positivo.*/
/*
function comparar(a){
  if (a>=0) {
  console.log('el numero es positivo :', a);
  } else {
    console.log('el numero es negativo :', a);
  }
  }
  comparar(-8);*/

/* 13. Crear una función que reciba 2 números, imprimir si el primer número es
divisible por el segundo.*/
/*
function divisible(a, b){
if (a/b === 0) {
  console.log('El primer numero es divisible');
}else{console.log('El primer numero no es divisible');
}
}
divisible(8, 2);*/

/*14. Crear una función que reciba 1 número, imprimir si es negativo o si es
positivo o si es cero.*/
/*
function comparar(a){
if (a>0) {
  console.log('el numero es positivo :', a);
 {if (a===0) {
  console.log('el numero es igual a :', a)  ;
{if (a<0) {
  console.log('el numero es negativo :', a)  ;
  
}}}}}}
comparar(0);*/